let roundChoice = prompt('How many rounds would you like to play?');
let integer = parseInt(roundChoice, 10);

let computerChoice;

let userScore = 0;
let computerScore = 0;
let tiedScore = 0;

for (let i = 0; i < roundChoice; i++) {

let userChoice = prompt('Do you choose: Rock, Paper, or Scissors?');

let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;



if (randomNumber === 0) {
    computerChoice = 'Rock';
} else if (randomNumber === 1) {
    computerChoice = 'Paper';
} else if (randomNumber === 2) {
    computerChoice = 'Scissors';
}

if (userChoice === computerChoice) {
    alert('You tied! You both chose ' + userChoice);
    tiedScore = tiedScore + 1;
} 

if (userChoice === 'Rock' && randomNumber === 1) {
    alert('You won!');
    userScore = userScore + 1;
} else if (userChoice === 'Rock' && randomNumber === 2) {
    alert('You lost!');
    computerScore = computerScore + 1;
}

if (userChoice === 'Paper' && randomNumber === 0) {
    alert('You won!');
    userScore = userScore + 1;
} else if (userChoice === 'Paper' && randomNumber === 2) {
    alert('You lost!');
    computerScore = computerScore + 1;
}

if (userChoice === 'Scissors' && randomNumber === 0) {
    alert('You lost!');
    computerScore = computerScore + 1;
} else if (userChoice === 'Scissors' && randomNumber === 1) {
    alert('You won!');
    userScore = userScore + 1;
}
}


alert('You have won ' + userScore + ' times, you have tied ' + tiedScore + ' times, and lost ' + computerScore + ' times.');

console.log(userScore + ' - ' + computerScore);
