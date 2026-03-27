const scene        = document.getElementById('scene');
const note         = document.getElementById('note');
const waxSeal      = document.getElementById('waxSeal');
const noteVideo    = document.getElementById('noteVideo');
const thumbOverlay = document.getElementById('thumbOverlay');
const catSitting   = document.getElementById('catSitting');
const catJumping   = document.getElementById('catJumping');
const arrowLabel   = document.getElementById('arrowLabel');

let opened = false;

// Seal pops in on load
window.addEventListener('load', () => {
  setTimeout(() => waxSeal.classList.add('popped'), 800);
});

// Confetti burst
function spawnConfetti() {
  const colors = ['#f0d080', '#c0392b', '#3498db', '#2ecc71', '#e74c3c', '#9b59b6'];
  for (let i = 0; i < 30; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = (30 + Math.random() * 40) + 'vw';
    piece.style.top  = (20 + Math.random() * 30) + 'vh';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    piece.style.width  = (8 + Math.random() * 8) + 'px';
    piece.style.height = (8 + Math.random() * 8) + 'px';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 2000);
  }
}

// Open / close envelope
scene.addEventListener('click', () => {
  opened = !opened;
  scene.classList.toggle('open', opened);

  if (opened) {
    catSitting.classList.add('hide');
    arrowLabel.classList.add('hide');

    setTimeout(() => {
      note.classList.add('revealed');
      catJumping.classList.add('show');
      spawnConfetti();
    }, 500);
  } else {
    // Reset
    note.classList.remove('revealed');
    catJumping.classList.remove('show');
    catSitting.classList.remove('hide');
    arrowLabel.classList.remove('hide');
    noteVideo.pause();
    noteVideo.currentTime = 0;
    thumbOverlay.classList.remove('hidden');
  }
});

// Play video
thumbOverlay.addEventListener('click', (e) => {
  e.stopPropagation();
  thumbOverlay.classList.add('hidden');
  noteVideo.play();
});
