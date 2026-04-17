// Glorija's Bakery — landing page interactions (vanilla JS, no deps)
(function () {
  "use strict";

  // --- Config -------------------------------------------------------------
  // Replace with the real WhatsApp number (international, digits only, no "+").
  var WA_NUMBER = "385000000000";

  var MSG = {
    b2b: "Hallo, wir betreiben ein Hotel mit ca. ___ Zimmern und interessieren uns für eine tägliche Brotlieferung.",
    b2c: "Hallo, ich möchte Brot bestellen. Wann seid ihr heute unterwegs?"
  };

  // --- Hydrate WhatsApp links --------------------------------------------
  function waHref(kind) {
    var text = encodeURIComponent(MSG[kind] || "");
    return "https://wa.me/" + WA_NUMBER + "?text=" + text;
  }

  document.querySelectorAll("a[data-wa]").forEach(function (a) {
    var kind = a.getAttribute("data-wa");
    a.href = waHref(kind);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });

  // Show the raw number in the footer link (keeps it readable)
  var waFooter = document.getElementById("wa-footer");
  if (waFooter) {
    var pretty = "+" + WA_NUMBER.replace(/^(\d{3})(\d{2})(\d{3})(\d{4}).*/, "$1 $2 $3 $4");
    waFooter.textContent = pretty;
  }

  // --- Footer year --------------------------------------------------------
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // --- Sticky mobile CTA: show once hero is out of view ------------------
  var mobileCta = document.getElementById("mobileCta");
  var hero = document.getElementById("hero");
  if (mobileCta && hero && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          mobileCta.classList.remove("is-visible");
          mobileCta.setAttribute("aria-hidden", "true");
        } else {
          mobileCta.classList.add("is-visible");
          mobileCta.setAttribute("aria-hidden", "false");
        }
      });
    }, { rootMargin: "-20% 0px 0px 0px", threshold: 0 });
    io.observe(hero);
  }

  // --- Reveal-on-scroll --------------------------------------------------
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var ro = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { ro.observe(el); });
  }

  // --- Bread slider (Produkt-Sektion) ------------------------------------
  // Pflege-Hinweis: Tag-Varianten "standard" | "week" | "next" | "seasonal"
  // steuern die Farbe via CSS-Klassen .bread-slide__tag--*.
  var BREADS = [
    {
      tag: "Standard · Signature",
      tagVariant: "standard",
      name: "Joghurtkrustenbrot",
      desc: "Knusprig, mild, jeden Tag verfügbar.",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
      alt: "Joghurtkrustenbrot mit knuspriger Kruste"
    },
    {
      tag: "Diese Woche",
      tagVariant: "week",
      name: "Zwiebelbrot",
      desc: "Herzhaft, perfekt zum Frühstück.",
      img: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=900&q=80",
      alt: "Aufgeschnittenes Zwiebelbrot"
    },
    {
      tag: "Nächste Woche",
      tagVariant: "next",
      name: "Sonnenblumenkernbrot",
      desc: "Saftig, nussig, lange frisch.",
      img: "https://images.unsplash.com/photo-1568471173242-461f0a730452?auto=format&fit=crop&w=900&q=80",
      alt: "Sonnenblumenkernbrot, körnig"
    },
    {
      tag: "Saisonal",
      tagVariant: "seasonal",
      name: "Kürbis- / Kartoffelbrot",
      desc: "Wechselndes Spezial je nach Saison.",
      img: "https://images.unsplash.com/photo-1600398138360-c5be0c2a47fa?auto=format&fit=crop&w=900&q=80",
      alt: "Saisonales Kürbis- oder Kartoffelbrot"
    }
  ];

  var slider = document.querySelector("[data-slider]");
  if (slider) {
    var track = slider.querySelector("[data-slider-track]");
    var dotsList = slider.querySelector("[data-slider-dots]");
    var prevBtn = slider.querySelector("[data-slider-prev]");
    var nextBtn = slider.querySelector("[data-slider-next]");
    var total = BREADS.length;

    BREADS.forEach(function (b, i) {
      var li = document.createElement("li");
      li.className = "bread-slide";
      li.setAttribute("role", "group");
      li.setAttribute("aria-roledescription", "Slide");
      li.setAttribute("aria-label", (i + 1) + " von " + total + " – " + b.name);
      li.innerHTML =
        '<figure class="bread-slide__media">' +
          '<img src="' + b.img + '" alt="' + b.alt + '" loading="lazy" decoding="async" width="900" height="900" />' +
        '</figure>' +
        '<div class="bread-slide__body">' +
          '<span class="bread-slide__tag bread-slide__tag--' + b.tagVariant + '">' + b.tag + '</span>' +
          '<h3 class="bread-slide__name">' + b.name + '</h3>' +
          '<p class="bread-slide__desc">' + b.desc + '</p>' +
        '</div>';
      track.appendChild(li);

      var dotLi = document.createElement("li");
      var dotBtn = document.createElement("button");
      dotBtn.type = "button";
      dotBtn.setAttribute("aria-label", "Slide " + (i + 1) + ": " + b.name);
      if (i === 0) dotBtn.setAttribute("aria-current", "true");
      dotBtn.addEventListener("click", function () { goTo(i); });
      dotLi.appendChild(dotBtn);
      dotsList.appendChild(dotLi);
    });

    var slides = track.querySelectorAll(".bread-slide");
    var dotButtons = dotsList.querySelectorAll("button");
    var current = 0;

    function goTo(index) {
      var i = ((index % total) + total) % total;
      var target = slides[i];
      if (!target) return;
      track.scrollTo({
        left: target.offsetLeft - (track.clientWidth - target.clientWidth) / 2,
        behavior: reduceMotion ? "auto" : "smooth"
      });
    }

    function setActive(i) {
      if (i === current) return;
      current = i;
      dotButtons.forEach(function (b, idx) {
        if (idx === i) b.setAttribute("aria-current", "true");
        else b.removeAttribute("aria-current");
      });
    }

    if ("IntersectionObserver" in window) {
      var slideObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && e.intersectionRatio >= 0.6) {
            var idx = Array.prototype.indexOf.call(slides, e.target);
            if (idx >= 0) setActive(idx);
          }
        });
      }, { root: track, threshold: [0.6, 0.9] });
      slides.forEach(function (s) { slideObserver.observe(s); });
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(current + 1); });

    slider.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft")  { e.preventDefault(); goTo(current - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); goTo(current + 1); }
    });

    // Auto-rotate (paused on hover/focus, hidden tab, or off-screen)
    var autoTimer = null;
    var inView = false;
    var paused = false;

    function tick() {
      if (reduceMotion || paused || !inView || document.visibilityState !== "visible") return;
      goTo(current + 1);
    }
    function start() {
      if (reduceMotion || autoTimer) return;
      autoTimer = setInterval(tick, 6000);
    }
    function stop() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }

    if (!reduceMotion && "IntersectionObserver" in window) {
      var visObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          inView = e.isIntersecting;
          if (inView) start(); else stop();
        });
      }, { threshold: 0.2 });
      visObserver.observe(slider);
    }

    slider.addEventListener("mouseenter", function () { paused = true; });
    slider.addEventListener("mouseleave", function () { paused = false; });
    slider.addEventListener("focusin",    function () { paused = true; });
    slider.addEventListener("focusout",   function () { paused = false; });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState !== "visible") stop(); else if (inView) start();
    });
  }
})();
