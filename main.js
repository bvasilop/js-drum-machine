function playDrums(e) {
  // console.log(e);
  // console.log(e.keyCode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio);

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // console.log(key);

  if (!audio) return;

  key.classList.add('play');
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('play');
}

const drumPads = Array.from(document.querySelectorAll('.drum-pad'));
drumPads.forEach(pad => pad.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playDrums);
