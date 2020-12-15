const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const phrases = ["singing loud for all to hear", "christmas spirit",
                "talking but louder", "smiling", "the Nice list"];
var missed = 0;

// listen for the start button to be pressed
startButton.addEventListener('click', => {
  overlay.style.display = 'none';
});
