document.addEventListener('DOMContentLoaded', () => {
    const pixelArt = document.querySelector('.pixel-art');
    const size = 50;
    
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            
            // Create full moon shape
            const distanceFromCenter = Math.sqrt(Math.pow(x - 25, 2) + Math.pow(y - 25, 2));
            if (distanceFromCenter < 20) {
                if (distanceFromCenter < 15) {
                    pixel.classList.add('moon-bright');
                } else if (distanceFromCenter < 18) {
                    pixel.classList.add('moon-medium');
                } else {
                    pixel.classList.add('moon-dark');
                }
                
                // Add craters
                if (Math.random() > 0.9) {
                    pixel.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                }
            }
            
            // Add stars
            if (Math.random() > 0.995 && distanceFromCenter > 20) {
                pixel.classList.add('star');
            }
            
            // Add subtle cloud effect
            if (y > 40 && Math.random() > 0.7) {
                pixel.classList.add('cloud');
            }
            
            pixelArt.appendChild(pixel);
        }
    }
});