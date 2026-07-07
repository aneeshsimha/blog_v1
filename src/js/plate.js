// FALSE COLOR — spectral canvas plate
// Renders an animated false-color field; cursor warms a soft bloom on the plate.
(function () {
  var plate = document.getElementById("plate");
  if (!plate) return;
  var canvas = document.getElementById("fc");
  if (!canvas) return;

  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ctx = canvas.getContext("2d");

  var BW = 320, BH = 140;
  canvas.width = BW;
  canvas.height = BH;
  var img = ctx.createImageData(BW, BH);
  var d = img.data;

  // Spectral lookup: deep navy → cyan → violet → magenta → infrared → amber → bone
  var LUT = [
    [0,    8,  12,  26],
    [0.16, 14, 72,  118],
    [0.32, 22, 196, 214],
    [0.48, 96, 58,  176],
    [0.60, 214,40,  142],
    [0.74, 236,86,  34],
    [0.88, 247,166, 46],
    [1.00, 255,243, 210],
  ];
  function lut(v) {
    if (v <= 0) return LUT[0];
    if (v >= 1) return LUT[LUT.length - 1];
    for (var i = 1; i < LUT.length; i++) {
      if (v <= LUT[i][0]) {
        var a = LUT[i - 1], b = LUT[i];
        var f = (v - a[0]) / (b[0] - a[0]);
        return [
          a[1] + (b[1] - a[1]) * f,
          a[2] + (b[2] - a[2]) * f,
          a[3] + (b[3] - a[3]) * f,
        ];
      }
    }
    return LUT[LUT.length - 1];
  }

  function fld(x, y, t) {
    var wx = Math.sin(y * 1.3 + t * 0.6) + Math.cos(x * 1.7 - t * 0.4);
    var wy = Math.cos(x * 1.1 - t * 0.5) + Math.sin(y * 1.9 + t * 0.45);
    var v = Math.sin((x + wx * 0.8) * 1.2 + t * 0.5) * Math.cos((y + wy * 0.8) * 1.5 - t * 0.4);
    v += 0.6 * Math.sin((x * 0.7 + y * 0.9) + t * 0.3);
    return 0.5 + 0.31 * v;
  }

  var ix = -9, iy = -9, infl = 0, target = 0;
  plate.addEventListener("pointermove", function (e) {
    var r = plate.getBoundingClientRect();
    ix = (e.clientX - r.left) / r.width * BW;
    iy = (e.clientY - r.top) / r.height * BH;
    target = 1;
  });
  plate.addEventListener("pointerleave", function () { target = 0; });

  function frame(t) {
    infl += (target - infl) * 0.08;
    for (var y = 0; y < BH; y++) {
      var ny = y / BH * 2.4;
      for (var x = 0; x < BW; x++) {
        var nx = x / BW * 4.6;
        var v = fld(nx, ny, t);
        if (infl > 0.01) {
          var dx = (x - ix) / 26, dy = (y - iy) / 18;
          var b = infl * Math.exp(-(dx * dx + dy * dy));
          v += b * 0.55;
        }
        if (v < 0) v = 0; else if (v > 1) v = 1;
        var c = lut(v);
        var o = (y * BW + x) * 4;
        d[o] = c[0]; d[o + 1] = c[1]; d[o + 2] = c[2]; d[o + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }

  if (reduce) { frame(0.6); return; }
  var t = 0;
  (function loop() {
    t += 0.012;
    frame(t);
    requestAnimationFrame(loop);
  })();
})();
