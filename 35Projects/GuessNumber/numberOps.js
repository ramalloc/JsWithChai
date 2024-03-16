const randomNum = parseInt(Math.floor(Math.random() * 100 + 1))

const numField = document.querySelector('#numField');
const submit = document.querySelector('#sub')
const prevGuess = document.querySelector('#prevGuess')
const guessRemained = document.querySelector('#guessRem')
const lowOrHi = document.querySelector('#lowOrHi')


const startOver = document.querySelector('#startOver')


let numGuess = 1;
let playGame = true;


console.log(`Guess Number is ${randomNum}`)
if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const numVal = (parseInt(numField.value));
        compareGuessNum(numVal);      
        displayGuessed(numVal)
        numField.value = ''
        displayRemainGuess();
        numGuess++;
    })
}

const compareGuessNum = (guessNum) => {
    if(guessNum === randomNum){
        displayMsg();
    }
    else if(guessNum > randomNum){
        lowOrHi.innerHTML = `Guess Number is Lower than ${guessNum}`
    }
    else{
        lowOrHi.innerHTML = `Guess Number is Higher than ${guessNum}`
    }
    
}

const displayMsg = (message) => {
    console.log(`Guess Number is ${randomNum}`)
}

const displayGuessed = (guessNum) => {
    prevGuess.innerHTML += `${guessNum} `
}

function displayRemainGuess() {
    guessRemained.innerHTML = `${11 - numGuess}`;
}
