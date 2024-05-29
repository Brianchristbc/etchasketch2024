let canvas = document.querySelector(".canvas");
let spsSelector = document.getElementById("sps");

window.addEventListener("load", () => {
  canvas.innerHTML = "";
  squaresPerSide = 40;
  canvas.style.display = "flex";
  canvas.style.flexWrap = "wrap";
  canvas.style.width = Number(squaresPerSide * 10) + "px";
  canvas.style.height = Number(squaresPerSide * 10) + "px";
  canvas.style.paddingBottom = "20px";
  numOfSquares = squaresPerSide ** 2;
  for (let i = 0; i < numOfSquares; i++) {
    let canvasSquare = document.createElement("li");
    canvasSquare.style.width = "10px";
    canvasSquare.style.height = "10px";
    canvasSquare.style.backgroundColor = "white";
    canvas.appendChild(canvasSquare);
  }
});

spsSelector.addEventListener("change", () => {
  canvas.innerHTML = "";
  squaresPerSide = Number(spsSelector.value);
  canvas.style.display = "flex";
  canvas.style.flexWrap = "wrap";
  canvas.style.width = Number(squaresPerSide * 10) + "px";
  canvas.style.height = Number(squaresPerSide * 10) + "px";
  canvas.style.paddingBottom = "20px";
  numOfSquares = squaresPerSide ** 2;
  for (let i = 0; i < numOfSquares; i++) {
    let canvasSquare = document.createElement("li");
    canvasSquare.style.width = "10px";
    canvasSquare.style.height = "10px";
    canvasSquare.style.backgroundColor = "white";
    canvas.appendChild(canvasSquare);
  }
});
