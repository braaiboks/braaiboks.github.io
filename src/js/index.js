window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('logo-loader');
  const logo = document.getElementById('loader-logo');
  const bar = document.getElementById('loader-bar');

  // Animate loading bar
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18 + 7; // random speed for realism
    if (progress >= 100) progress = 100;
    bar.style.width = progress + '%';
    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Animate logo towards viewer and fade out loader
        logo.style.transform = 'scale(8.5)';
        logo.style.opacity = '0';
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        setTimeout(() => {
          loader.style.display = 'none';
          // Optionally, focus main content or trigger other animations here
        }, 700);
      }, 400);
    }
  }, 90);

  // Realistic ember animation
  const overlay = document.querySelector('.ember-overlay');
  const EMBER_COUNT = 18;

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

  function createEmber() {
    const ember = document.createElement('div');
    ember.className = 'ember';

    // Randomize size and color
    const size = randomBetween(7, 18);
    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;

    // Randomize horizontal start position
    ember.style.left = `${randomBetween(5, 90)}vw`;

    // Always start at the bottom of the viewport
    ember.style.top = `100vh`;

    // Randomize animation duration and delay
    const duration = randomBetween(6, 12);
    const delay = randomBetween(0, 8);

    // Randomize drift direction and distance
    const drift = randomBetween(-8, 8);

    // Randomize gradient (hotter/cooler core)
    const colorStops = [
      '#fffbe0', '#ffd700', '#ffae00', '#ff6a00', '#ff3c00'
    ];
    const core = colorStops[Math.floor(randomBetween(0, 2))];
    const mid = colorStops[Math.floor(randomBetween(1, 4))];
    const edge = colorStops[Math.floor(randomBetween(2, 5))];

    ember.style.background = `radial-gradient(circle, ${core} 0%, ${mid} 40%, ${edge} 100%, transparent 100%)`;

    // Animate with custom properties for drift and twinkle
    ember.style.setProperty('--drift', `${drift}vw`);
    ember.style.animation = `emberRise ${duration}s linear ${delay}s infinite, emberTwinkle ${randomBetween(1.2, 2.5)}s ease-in-out ${delay/2}s infinite`;

    overlay.appendChild(ember);

    // Restart animation when finished for continuous effect
    ember.addEventListener('animationiteration', () => {
      ember.remove();
      overlay.appendChild(createEmber());
    });

    return ember;
  }

  // Clear any existing embers
  overlay.innerHTML = '';
  for (let i = 0; i < EMBER_COUNT; i++) {
    overlay.appendChild(createEmber());
  }
});