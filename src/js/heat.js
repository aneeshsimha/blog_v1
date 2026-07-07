// NIGHT STUDY — cursor bloom (indigo lamp-glow following the pointer)
// Color/blend live in CSS (.heat-bloom uses --glow). Hidden on reduce-motion and touch.
(function () {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (matchMedia("(hover: none)").matches) return;

  var bloom = document.createElement("div");
  bloom.className = "heat-bloom";
  document.body.appendChild(bloom);

  var tx = 0, ty = 0, cx = 0, cy = 0;
  var visible = false;

  document.addEventListener("pointermove", function (e) {
    tx = e.clientX; ty = e.clientY;
    if (!visible) { visible = true; bloom.style.opacity = "1"; }
  });
  document.addEventListener("pointerleave", function () {
    visible = false; bloom.style.opacity = "0";
  });

  (function tick() {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    bloom.style.transform = "translate(" + cx + "px," + cy + "px) translate(-50%,-50%)";
    requestAnimationFrame(tick);
  })();
})();
