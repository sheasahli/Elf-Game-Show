const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const ul = document.getElementById('#list');
const startButton = document.querySelector('.btn__reset');
const phrases = ["singing loud for all to hear", "christmas spirit",
                "buddy the elf", "the naughty list", "the nice list"];
const button = document.getElementsByTagName('button');
const hearts = document.querySelectorAll(".tries img");
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

let randomPhraseArray = getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    list.appendChild(li);
    if (arr[i] !== ' ') {
      li.className = 'letter';
    } else {
      li.className = 'space';
    }
  }
};

let addToDisplay = addPhraseToDisplay(randomPhraseArray);

// check if letter is in phrase
function checkLetter(button) {
        let li = document.querySelectorAll('.letter');
        let match = null;
        for (let i = 0; i < li.length; i++) {
            if (li[i].textContent.toLowerCase() === button.textContent) {
              li[i].classList.add('show');
              match = li[i].textContent;
            }
        }
        return match;
};

//check if the game has been won or lost
const checkWin = () => {
    let letters = document.querySelectorAll('.letter');
    let show = document.getElementByClassName('show');
    if (letters.length === show.length) {
      overlay.className = 'win';
      document.querySelector('h2').textContent = 'Congratulations! You won!';
      overlay.style.display = 'flex';
    } else if (missed > 4) {
      overlay.className = 'lose';
      document.querySelector('h2').textContent = "You lost, try again!";
      overlay.style.display = 'flex';
    }
};


//listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true;
    } else if (e.target) {
        alert('Please click button.')
    }
    const buttonCheck = checkLetter(e.target);
    if (buttonCheck === null) {
        missed += 1;
        hearts[missed - 1].src = 'images/lostHeart.png';
    }
    checkWin();
});
