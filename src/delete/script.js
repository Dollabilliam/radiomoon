document.addEventListener('DOMContentLoaded', () => {
    const pixelArt = document.querySelector('.pixel-art');
    const size = 40;
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            
            // Create moon shape
            const distanceFromCenter = Math.sqrt(Math.pow(x - 20, 2) + Math.pow(y - 20, 2));
            if (distanceFromCenter < 15) {
                pixel.classList.add('moon');
                
                // Add some darker spots for texture
                if ((x + y) % 7 === 0 && Math.random() > 0.5) {
                    pixel.classList.add('moon-dark');
                }
            }
            
            // Add landscape at the bottom
            if (y > 30 && Math.random() > 0.5) {
                pixel.classList.add('landscape');
            }
            
            pixelArt.appendChild(pixel);
        }
    }
});