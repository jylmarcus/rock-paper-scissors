const selection = ["rock", "paper", "scissors"];

function computerPlay (){
    return selection[Math.floor(Math.random()* selection.length)];
}

function showId(){
    console.log(this.id);
}

const buttons = document.querySelectorAll(".rps");
buttons.forEach(function(currentBtn){
    currentBtn.addEventListener("click", playRPS);
})

const playerScore = document.querySelector("#playerScore");
const cpuScore = document.querySelector("#cpuScore");
const resultText = document.querySelector("#pResult");
const matchResult = document.querySelector("#matchResult");

function playRPS(){
    let player = selection.indexOf(this.id);
    let computer = selection.indexOf(computerPlay());

    let result = player - computer;

    if (result == 0) {
        resultText.innerHTML = `Tie! The computer picked ${selection[computer]}.`;
    } else if (result == -1 || result == (selection.length-1)) {
        let winningSelection = selection[computer].charAt(0).toUpperCase() + selection[computer].slice(1);
        resultText.innerHTML = `You lose! ${winningSelection} beats ${selection[player]}.`;
        cpuScore.innerHTML = parseInt(cpuScore.innerHTML) + 1;
    } else if (result == 1 || result == (-1*(selection.length-1))){
        let winningSelection = selection[player].charAt(0).toUpperCase() + selection[player].slice(1)
        resultText.innerHTML = `You win! ${winningSelection} beats ${selection[computer]}!`;
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
    }

    if (parseInt(playerScore.innerHTML) == 5) {
        matchResult.innerHTML = "You have won the match!"
    } else if (parseInt(cpuScore.innerHTML) == 5) {
        matchResult.innerHTML = "You have lost the match!"
    } else {
        return;
    }
}



/*function game(){
    for (round = 1; round <= 5; round++){
        console.log(`Round ${round}`);
        playerSelection = prompt("Enter rock, paper or scissors.").toLowerCase();
        computerSelection = computerPlay();
        console.log(playRPS(playerSelection, computerSelection));
    }
} */


