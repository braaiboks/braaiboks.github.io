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
        logo.style.transform = 'scale(2.5)';
        logo.style.opacity = '0';
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        setTimeout(() => {
          loader.style.display = 'none';
          // Optionally, focus main content or trigger other animations here
        }, 700);
      }, 400);
    }
  }, 60);
});