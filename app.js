const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const ul = document.getElementById('#list');
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
function getRandomPhraseAsArray (arr) {
      let randomPhrase = phrases[randomIndex];
      let newRandomPhrase = randomPhrase.split('');
      return newRandomPhrase;
};

getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    ul.appendChild(li);
    if (arr[i] !== ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
  }
};

// check if letter is in phrase
function checkLetter(button) {
        let selectedLetters = document.querySelectorAll('.letter');
        let match = null;
        for (let i = 0; i < selectedLetters.length; i++) {
            if (selectedLetters[i].textContent.toLowerCase() === button.textContent) {
              selectedLetters.classList.add('show');
              match = selectedLetters[i].textContent;
            }
        };
        return match;
};

//check if the game has been won or lost
const checkWin = () => {


};


//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {


});
