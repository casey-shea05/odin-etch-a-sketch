// Create pixels (16 x 16 for now)
const container = document.querySelector("#container");

let size = 16;
function createPixels(size) {
  for (let i = 0; i < size ** 2; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");

    // calculate pixel width + height
    pixel.style.width = `calc(30rem / ${size}`;
    pixel.style.height = `calc(30rem / ${size}`;

    container.append(pixel);
  }
}
createPixels(size);

// Create colour function
function colourPixel(element) {
  if (element.classList.contains("pixel")) {
    element.style.backgroundColor = "black";
  }
}

// Track whether user is drawing or now
let isDrawing = false;

container.addEventListener("mousedown", (event) => {
  isDrawing = true;
  colourPixel(event.target);
});

container.addEventListener("mousemove", (event) => {
  if (isDrawing) {
    colourPixel(event.target);
  }
});

// Use window here to track if they release mouse or go outside container
window.addEventListener("mouseup", () => (isDrawing = false));

// Reset button functionality
function resetCanvas(size) {
  container.innerHTML = "";
  createPixels(size);
}
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => resetCanvas(size));

// Resize button functionality
const resize = document.querySelector("#resize");
resize.addEventListener("click", () => {
  size = prompt("Enter a custom canvas size between 1 - 100.");
  resetCanvas(size);
});
