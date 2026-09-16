// Create pixels (16 x 16 for now)
const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  container.append(pixel);
};
