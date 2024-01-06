let RandomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSLot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParams');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess =parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert(`please enter a valid number not ${guess}`)
    }else if(guess<1){
        alert(`please enter a number greater than 1 not ${guess}`)
    }else if (guess>100){
        alert(`please enter a number less than 100 not ${guess}`)
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess()
            displayMessage(`game over ! Random Number was ${RandomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===RandomNumber){
    displayMessage(`Your Number ${guess} is  the Actual Number`)
    endGame()
    }
    else if (guess>RandomNumber){
    displayMessage(`Your Number ${guess} is Greater than the Actual Number`)
    }
    else if (guess<RandomNumber){
    displayMessage(`Your Number ${guess} is less than the Actual Number`)
    
    }
}

function displayGuess(guess) {
   userInput.value =''
   guessSLot.innerHTML += `${guess}  `
   numGuess++
   remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML =`<h2>${message}</h2>`
   // console.log(message);
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        RandomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSLot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}

function endGame() {
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start a New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame();
}
