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
})();
