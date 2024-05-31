let canvas = document.querySelector(".canvas");
let canvasContainer = document.querySelector(".canvas-container");
let colorOutput = document.getElementById("myColor");
let randomButton = document.getElementById("random");
let darkButton = document.getElementById("dark");
let brushColor = "#36827F";

let slider = document.getElementById("myRange");
let sliderOutput = document.querySelector(".slider-output");
sliderOutput.innerHTML = slider.value;
slider.oninput = function () {
  console.log(this.value);
  sliderOutput.innerText = this.value;
};

colorOutput.addEventListener("change", () => {
  brushColor = colorOutput.value;
});

function canvasGenerator() {
  console.log(slider.value);
  canvas.innerHTML = "";
  canvas.style.display = "flex";
  canvas.style.flexWrap = "wrap";
  canvas.style.width = "640px";
  canvas.style.height = "640px";
  console.log(slider.value);
  oneSideNumOfSquares = Math.floor(
    Number(canvas.offsetWidth / (100 - slider.value))
  );
  totalNumOfSquares = oneSideNumOfSquares ** 2;
  for (let i = 0; i < totalNumOfSquares; i++) {
    let canvasSquare = document.createElement("li");
    canvasSquare.style.width =
      Number(canvas.offsetWidth / oneSideNumOfSquares) + "px";
    canvasSquare.style.height =
      Number(canvas.offsetWidth / oneSideNumOfSquares) + "px";
    canvasSquare.style.backgroundColor = "white";
    canvas.appendChild(canvasSquare);
  }

  let canvasSquares = document.querySelectorAll("li");
  console.log(canvasSquares);
  canvasSquares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = brushColor;
    });
  });
}

window.addEventListener("load", () => {
  canvasGenerator();
});

slider.addEventListener("change", () => {
  canvasGenerator();
});

randomButton.addEventListener("click", () => {
  let canvasSquares = document.querySelectorAll("li");
  if (randomButton.classList.contains("toggled")) {
    randomButton.classList.toggle("toggled");
    canvasSquares.forEach((square) => {
      square.removeEventListener("mouseover", (e) => {
        e.target.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      });
      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = brushColor;
      });
    });
  } else {
    randomButton.classList.toggle("toggled");
    canvasSquares.forEach((square) => {
      square.removeEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = brushColor;
      });
      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      });
    });
  }
});

darkButton.addEventListener("click", () => {
  let r = 255;
  let g = 255;
  let b = 255;
  let canvasSquares = document.querySelectorAll("li");
  if (darkButton.classList.contains("toggled")) {
    darkButton.classList.toggle("toggled");
    canvasSquares.forEach((square) => {
      square.removeEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        r--;
        g--;
        b--;
      });
      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = brushColor;
      });
    });
  } else {
    canvasSquares.forEach((square) => {
      square.removeEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = brushColor;
      });
    });
    darkButton.classList.toggle("toggled");
    canvasSquares.forEach((square) => {
      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        r--;
        g--;
        b--;
      });
    });
  }
});
