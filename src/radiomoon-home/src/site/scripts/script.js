const colors = [
  "#FB83AD",
  "#D2E177",
  "#E25800",
  "#F0B285",
  "#833E8D",
  "#F08592",
];

const grid = document.querySelector(".grid");
const rows = 12;
const cols = 15;

for (let i = 0; i < rows * cols; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  grid.appendChild(cell);
}
