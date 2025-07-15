window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 1s ease';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 1000);
});

document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
  });
});

const playBtn = document.getElementById('play-music');
const bgMusic = document.getElementById('bg-music');
if (playBtn && bgMusic) {
  playBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      playBtn.textContent = '⏸️ Pause Music';
    } else {
      bgMusic.pause();
      playBtn.textContent = '🎵 Play Rabindra Sangeet';
    }
  });
}
