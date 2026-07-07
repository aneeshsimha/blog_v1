// NIGHT STUDY — theme switcher
// Resolution order: explicit user choice (localStorage) → dark (the default).
// Run inline (head) to avoid FOUC.
(function () {
  var STORAGE = "theme";
  var html = document.documentElement;

  function resolve() {
    try {
      var saved = localStorage.getItem(STORAGE);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    return "dark";
  }

  function apply(mode) {
    html.dataset.theme = mode;
    var btn = document.getElementById("themeBtn");
    var lbl = document.getElementById("themeLbl");
    if (lbl) lbl.textContent = mode === "dark" ? "dark" : "light";
    if (btn) btn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
  }

  // Set immediately to avoid flash
  apply(resolve());

  // Wire toggle once DOM is ready
  function wire() {
    var btn = document.getElementById("themeBtn");
    if (!btn) return;
    var lbl = document.getElementById("themeLbl");
    if (lbl) lbl.textContent = (html.dataset.theme === "dark") ? "dark" : "light";
    btn.addEventListener("click", function () {
      var next = html.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem(STORAGE, next); } catch (e) {}
      apply(next);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
