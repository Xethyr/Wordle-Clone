const guessBtn = document.getElementById('guess-btn');
const box1 = document.getElementById('letter-1');
const box2 = document.getElementById('letter-2');
const box3 = document.getElementById('letter-3');
const box4 = document.getElementById('letter-4');
const box5 = document.getElementById('letter-5');
const box6 = document.getElementById('letter-6');
const box7 = document.getElementById('letter-7');
const box8 = document.getElementById('letter-8');
const box9 = document.getElementById('letter-9');
const box10 = document.getElementById('letter-10');
const box11 = document.getElementById('letter-11');
const box12 = document.getElementById('letter-12');
const box13 = document.getElementById('letter-13');
const box14 = document.getElementById('letter-14');
const box15 = document.getElementById('letter-15');
const box16 = document.getElementById('letter-16');
const box17 = document.getElementById('letter-17');
const box18 = document.getElementById('letter-18');
const box19 = document.getElementById('letter-19');
const box20 = document.getElementById('letter-20');
const box21 = document.getElementById('letter-21');
const box22 = document.getElementById('letter-22');
const box23 = document.getElementById('letter-23');
const box24 = document.getElementById('letter-24');
const box25 = document.getElementById('letter-25');
const box26 = document.getElementById('letter-26');
const box27 = document.getElementById('letter-27');
const box28 = document.getElementById('letter-28');
const box29 = document.getElementById('letter-29');
const box30 = document.getElementById('letter-30');

let guesses = 0;

const solution = 'saute';

function checkGuess() {
    const guessInput = document.getElementById('guess-input');
    const guessArray = guessInput.value.split('');
    const solutionArray = solution.split('');
    console.log(guessInput.value);
    console.log(guesses);

    if (guessInput.value === solution) {
        if (guesses === 1) {
            box1.classList.add('correct');
            box2.classList.add('correct');
            box3.classList.add('correct');
            box4.classList.add('correct');
            box5.classList.add('correct');
            document.getElementById('guess-input').value = '';
            return;
        }
    }
    // for (let i = 0; i < guessArray.length; i++) {
    
    // }
}

function appendGuess() {
    const guessInput = document.getElementById('guess-input').value.toUpperCase();
    const guessArray = guessInput.split('');
    const solutionArray = solution.split('');
    guesses++;
    if (guesses === 1) {
        box1.innerText = guessArray[0];
        box2.innerText = guessArray[1];
        box3.innerText = guessArray[2];
        box4.innerText = guessArray[3];
        box5.innerText = guessArray[4];
        checkGuess();
        return;
    }

}