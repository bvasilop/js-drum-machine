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
  renderDisplay(e);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('play');
}

function renderDisplay(e) {
  // console.log(e.keyCode);
  
  const drumData = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // console.log(drumData.dataset.drum);
  const drumType = drumData.dataset.drum;

  const drumBox = document.getElementById('display');
  drumBox.classList.add('play');

  document.getElementById('display').textContent = drumType;
}

const drumPads = Array.from(document.querySelectorAll('.drum-pad'));
drumPads.forEach(pad => pad.addEventListener('transitionend', removeTransition));

const drumBox = document.getElementById('display');
drumBox.addEventListener('transitionend', removeTransition);

window.addEventListener('keydown', playDrums);
