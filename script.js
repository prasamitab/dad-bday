// Section navigation logic
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.section.active').classList.remove('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

// Background music toggle
const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('play-music');

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.classList.add('playing');
    musicBtn.textContent = '🔇 Pause Rabindra Sangeet';
  } else {
    bgMusic.pause();
    musicBtn.classList.remove('playing');
    musicBtn.textContent = '🎵 Play Rabindra Sangeet';
  }
});
