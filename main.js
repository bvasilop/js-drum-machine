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
  
  if (e.keyCode === 81) {
    drumType = 'Clap';
  }
  if (e.keyCode === 87) {
    drumType = 'Hihat';
  }
  if (e.keyCode === 69) {
    drumType = 'Kick';
  }
  if (e.keyCode === 65) {
    drumType = 'Openhat';
  }
  if (e.keyCode === 83) {
    drumType = 'Boom';
  }
  if (e.keyCode === 68) {
    drumType = 'Ride';
  }
  if (e.keyCode === 90) {
    drumType = 'Snare';
  }
  if (e.keyCode === 88) {
    drumType = 'Tom';
  }
  if (e.keyCode === 67) {
    drumType = 'Tink';
  }

  const drumBox = document.getElementById('display');
  drumBox.classList.add('play');

  document.getElementById('display').textContent = drumType;
}

const drumPads = Array.from(document.querySelectorAll('.drum-pad'));
drumPads.forEach(pad => pad.addEventListener('transitionend', removeTransition));

const drumBox = document.getElementById('display');
drumBox.addEventListener('transitionend', removeTransition);

window.addEventListener('keydown', playDrums);
