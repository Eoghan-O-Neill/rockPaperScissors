function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    return choice == 0 ? 'rock':
    choice == 1 ? 'paper': 
    'scissors';
}

function getHumanChoice() {
    let choice = prompt("What is your choice?");
    return choice
}

const rockpaper = ['rock', 'paper'];
const paperscissors = ['paper', 'scissors'];
const scissorsrock = ['scissors', 'rock'];

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    console.log(`You choose ${humanChoice}.`)
    console.log(`Computer chooses ${computerChoice}.`)
    if (humanChoice === computerChoice) {
        console.log(
            `${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)} and ${computerChoice}. Tie!`
        )
        return 2 // tie
    }
    else if (rockpaper.includes(humanChoice) && rockpaper.includes(computerChoice)) {
        if (humanChoice === 'rock') {
            console.log('Paper beats rock. You lose!')
            return 1 // computer wins
        }
        else {
            console.log('Paper beats rock. You win!')
            return 0 // human wins
        }
    }
    else if (paperscissors.includes(humanChoice) && paperscissors.includes(computerChoice)) {
        if (humanChoice === 'scissors') {
            console.log('Scissors beats paper. You win!')
            return 0
        }
        else {
            console.log('Scissors beats paper. You lose!')
            return 1
        }
    }
    else if (scissorsrock.includes(humanChoice) && scissorsrock.includes(computerChoice)) {
        if (humanChoice === 'scissors') {
            console.log('Rock beats scissors. You lose!')
            return 1
        }
        else {
            console.log('Rock beats scissors. You win!')
            return 0
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    console.log("Welcome. Let's play best of 5!!")
    for (let i=0; i<5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result === 0) {
            humanScore = ++humanScore
        }
        else if (result === 1) {
            computerScore = ++computerScore
        }
    }
    if (humanScore > computerScore) {
        console.log(`Your score: ${humanScore}
            Computer Score: ${computerScore}
            Congratulations! You Win!!`)
    }
    else if (humanScore < computerScore) {
        console.log(`Your score: ${humanScore}
            Computer Score: ${computerScore}
            Comiserations! You Lose!!`)
    }
    else {
        console.log(`Your score: ${humanScore}
            Computer Score: ${computerScore}
            Tie! Want to play again?`)
    }
}

playGame()







