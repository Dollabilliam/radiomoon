const colors = [
    '#FB83AD', // PANTONE 18-4252 TCX Blue Atoll
    '#D2E177', // PANTONE 16-5421 TCX Meadowbrook
    '#E25800', // PANTONE 14-0955 TCX Samoan Sun
    '#F0B285', // PANTONE 16-1539 TCX Coral Gold
    '#833E8D',
    '#F08592'    // PANTONE 18-1762 TCX Haute Red
];

const grid = document.querySelector('.grid');
const rows = 12;
const cols = 15;

for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    grid.appendChild(cell);
}