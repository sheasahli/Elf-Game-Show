const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const phrases = ["singing loud for all to hear", "christmas spirit",
                "talking but louder", "smiling", "the Nice list"];
const questions = ['What is the best way to spread Christmas Cheer?',
                  'What makes reindeer fly?', 'Buddy thinks singing is like?',
                  'What does Buddy like to do?', 'Where is there always room for more?'];
let missed = 0;
let randomIndex = Math.floor(Math.random() * questions.length);

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

// function to return corresponding question

function getRandomQuestions (arrQ) {
        let randomQueston = arrQ[randomIndex];
        return randomQuestion;
}
