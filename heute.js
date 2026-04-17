// Istra Bakery — interactive route map for heute.html
// Depends on Leaflet (loaded globally as window.L).
(function () {
  "use strict";

  if (!window.L) return; // Leaflet failed to load — bail silently.
  var mapEl = document.getElementById("routeMap");
  if (!mapEl) return;

  // --- Config (mirrors script.js so popups work standalone) --------------
  var WA_NUMBER = "385000000000";

  function waHref(location) {
    var msg = location
      ? "Hallo, ich möchte für " + location + " Brot bestellen. Liegt mein Ort auf eurer Route?"
      : "Hallo, ich möchte Brot bestellen. Wann seid ihr heute unterwegs?";
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  }

  // --- Locations ----------------------------------------------------------
  // status: 'active' = feste Route, 'request' = auf Anfrage / im Ausbau
  var LOCATIONS = [
    { name: "Pula",           lat: 44.8666, lng: 13.8496, status: "active",  window: "Vormittags",   region: "sued" },
    { name: "Fažana",         lat: 44.9213, lng: 13.8061, status: "active",  window: "Vormittags",   region: "west" },
    { name: "Vodnjan",        lat: 44.9608, lng: 13.8513, status: "active",  window: "Kurzstopp",    region: "sued" },
    { name: "Medulin",        lat: 44.8195, lng: 13.9388, status: "request", window: "Auf Anfrage",  region: "sued" },
    { name: "Ližnjan",        lat: 44.8445, lng: 13.9532, status: "request", window: "Auf Anfrage",  region: "sued" },
    { name: "Svetvinčenat",   lat: 45.0825, lng: 13.8138, status: "request", window: "Im Ausbau",    region: "inland" },
    { name: "Rovinj",         lat: 45.0811, lng: 13.6387, status: "request", window: "Im Ausbau",    region: "west" },
    { name: "Bale",           lat: 45.0388, lng: 13.7859, status: "request", window: "Auf Anfrage",  region: "west" }
  ];

  // --- Init map -----------------------------------------------------------
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var map = L.map(mapEl, {
    center: [44.95, 13.83],
    zoom: 10,
    zoomControl: true,
    scrollWheelZoom: false,      // avoid hijacking page scroll
    tap: true,
    fadeAnimation: !reduceMotion,
    zoomAnimation: !reduceMotion
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // --- Pin icons ----------------------------------------------------------
  function makeIcon(status) {
    var cls = "pin pin--" + status;
    return L.divIcon({
      className: "pin-wrap",
      html: '<span class="' + cls + '" aria-hidden="true"><span class="pin__dot"></span></span>',
      iconSize: [28, 36],
      iconAnchor: [14, 34],
      popupAnchor: [0, -30]
    });
  }
  var activeIcon  = makeIcon("active");
  var requestIcon = makeIcon("request");

  // --- Popup renderer -----------------------------------------------------
  function popupHtml(loc) {
    var statusLabel = loc.status === "active" ? "Aktiv auf Route" : "Auf Anfrage";
    var statusClass = loc.status === "active" ? "pop__status--active" : "pop__status--request";
    return (
      '<div class="pop">' +
        '<strong class="pop__name">' + loc.name + '</strong>' +
        '<span class="pop__status ' + statusClass + '">' + statusLabel + '</span>' +
        (loc.window ? '<p class="pop__window">' + loc.window + '</p>' : '') +
        '<a class="btn btn--whatsapp btn--compact pop__cta" ' +
          'href="' + waHref(loc.name) + '" target="_blank" rel="noopener noreferrer">' +
          'Für ' + loc.name + ' anfragen' +
        '</a>' +
      '</div>'
    );
  }

  // --- Markers ------------------------------------------------------------
  var markers = LOCATIONS.map(function (loc) {
    var m = L.marker([loc.lat, loc.lng], {
      icon: loc.status === "active" ? activeIcon : requestIcon,
      title: loc.name,
      alt: loc.name + " – " + (loc.status === "active" ? "Aktiv auf Route" : "Auf Anfrage"),
      keyboard: true
    });
    m.bindPopup(popupHtml(loc), { closeButton: true, autoPan: true, maxWidth: 240 });
    m._loc = loc;
    return m;
  });

  // --- Route polyline (through active stops) ------------------------------
  var routeOrder = ["Fažana", "Vodnjan", "Pula"];
  var routeCoords = routeOrder
    .map(function (name) {
      var l = LOCATIONS.find(function (x) { return x.name === name && x.status === "active"; });
      return l ? [l.lat, l.lng] : null;
    })
    .filter(Boolean);

  var routeLine = L.polyline(routeCoords, {
    color: "#6B7A3A",
    weight: 3,
    opacity: 0.75,
    dashArray: "6 6",
    lineCap: "round",
    lineJoin: "round"
  });

  // --- Filtering ----------------------------------------------------------
  function applyFilter(filter) {
    markers.forEach(function (m) {
      var show =
        filter === "all" ||
        (filter === "active"  && m._loc.status === "active") ||
        (filter === "request" && m._loc.status === "request");
      if (show) {
        if (!map.hasLayer(m)) m.addTo(map);
      } else {
        if (map.hasLayer(m)) map.removeLayer(m);
      }
    });

    // Route line only when viewing active or all
    var showLine = filter === "all" || filter === "active";
    if (showLine) {
      if (!map.hasLayer(routeLine)) routeLine.addTo(map);
    } else {
      if (map.hasLayer(routeLine)) map.removeLayer(routeLine);
    }
  }

  applyFilter("all");

  // Fit bounds to all markers on initial load for a nice framing.
  var group = L.featureGroup(markers);
  var bounds = group.getBounds();
  if (bounds.isValid()) {
    map.fitBounds(bounds, { padding: [32, 32], maxZoom: 11, animate: false });
  }

  // --- Filter tab wiring --------------------------------------------------
  var tabs = document.querySelectorAll(".map-filter");
  tabs.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.getAttribute("data-filter") || "all";
      tabs.forEach(function (t) {
        var active = t === btn;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      applyFilter(filter);
    });
  });

  // --- Resize fix (Leaflet can mis-render when its container was hidden) -
  setTimeout(function () { map.invalidateSize(); }, 250);
  window.addEventListener("resize", function () { map.invalidateSize(); });
})();
