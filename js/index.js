window.addEventListener("load", () => {
  const canvas = document.getElementById("board");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.8;

  var color = "black",
    canvasWidth = 5;
  let painting = false;

  var inputColor = document.getElementById("color");
  var inputWidth = document.getElementById("width");

  inputColor.oninput = function () {
    color = this.value;
    console.log(color);
  };

  inputWidth.oninput = function () {
    canvasWidth = this.value;
    console.log(canvasWidth);
  };

  function startPosition() {
    painting = true;
    draw;
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.lineWidth = canvasWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  canvas.addEventListener("touchstart", startPosition);
  canvas.addEventListener("touchend", finishedPosition);
  canvas.addEventListener("touchmove", draw);
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});
