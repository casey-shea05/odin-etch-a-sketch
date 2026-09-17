// Create pixels (16 x 16 for now)
const container = document.querySelector("#container");
function createPixels() {
  for (let i = 0; i < 256; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    container.append(pixel);
  }
}
createPixels();

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

// Reset function
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  container.innerHTML = "";
  createPixels();
});
