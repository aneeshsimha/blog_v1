// NIGHT STUDY — fun pass: currently-line picker, nyc clock, esc closes details.
// Global script; every feature guards on element presence (only home has them).
(function () {
  // "currently:" — pick ONE line at random per page load (no cycling)
  var currently = document.querySelector(".currently");
  if (currently) {
    var lines = [
      "currently: five tabs on nuclear startups, one on a japanese fabric mill",
      "currently: reading about solid-state batteries and cropped jackets",
      "currently: drawing the supply chain behind a very good t-shirt",
      "currently: at the terminal, after midnight, on purpose",
      "currently: turning a memo into a system"
    ];
    currently.textContent = lines[Math.floor(Math.random() * lines.length)];
  }

  // NYC clock in the home eyebrow — separator rendered inside the span
  var clock = document.querySelector(".clock");
  if (clock) {
    var fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });
    var tick = function () {
      clock.textContent = " · " + fmt.format(new Date()).toLowerCase();
    };
    tick();
    setInterval(tick, 30000);
  }

  // Esc closes the expandable "more" details when open
  var more = document.querySelector("details.more");
  if (more) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && more.open) more.open = false;
    });
  }
})();
