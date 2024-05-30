let canvas = document.querySelector(".canvas");

let slider = document.getElementById("myRange");
let sliderOutput = document.querySelector(".sliderOutput");
sliderOutput.innerHTML = slider.value;
slider.oninput = function () {
  console.log(this.value);
  sliderOutput.innerText = this.value;
};

window.addEventListener("load", () => {
  canvas.innerHTML = "";
  squaresPerSide = slider.value;
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
  let canvasSquares = document.querySelectorAll("li");
  console.log(canvasSquares);
  canvasSquares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#F08700";
    });
  });
});

slider.addEventListener("change", () => {
  canvas.innerHTML = "";
  squaresPerSide = Number(slider.value);
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

  let canvasSquares = document.querySelectorAll("li");
  console.log(canvasSquares);
  canvasSquares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#2000F0";
    });
  });
});
