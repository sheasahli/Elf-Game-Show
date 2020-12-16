const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const phrases = ["singing loud for all to hear", "christmas spirit",
                "buddy the elf", "the naughty list", "the nice list"];

let missed = 0;
let randomIndex = Math.floor(Math.random() * phrases.length);

// listen for the start button to be pressed
startButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// return a random phrase as an array
function getRandomPhraseAsArray (arrP) {
      let randomPhrase = arrP[randomIndex];
      let phrasesParse = Object.values(randomPhrase);
      return phraseParse;
}

// check if letter is in phrase

function checkLetter (button) {
        let selectedLetters = document.querySelectorAll('.letters');
        let match = null;
        for (i = 0; i < selectedLetters.length; i++) {
        };
        return match;
};
