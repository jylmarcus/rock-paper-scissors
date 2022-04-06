const selection = ["rock", "paper", "scissors"];

function computerPlay (){
    return selection[Math.floor(Math.random()* selection.length)];
}

function showId(){
    console.log(this.id);
}

const buttons = document.querySelectorAll(".rps");
console.log(buttons);
buttons.forEach(function(currentBtn){
    currentBtn.addEventListener("click", playRPS);
})

function playRPS(){
    let player = selection.indexOf(this.id);
    let computer = selection.indexOf(computerPlay());

    let result = player - computer;

    if (result == 0) {
        console.log(`Tie! The computer picked ${selection[computer]}.`);
    } else if (result == -1 || result == (selection.length-1)) {
        let winningSelection = selection[computer].charAt(0).toUpperCase() + selection[computer].slice(1);
        console.log(`You lose! ${winningSelection} beats ${selection[player]}.`);
    } else if (result == 1 || result == (-1*(selection.length-1))){
        let winningSelection = selection[player].charAt(0).toUpperCase() + selection[player].slice(1)
        console.log(`You win! ${winningSelection} beats ${selection[computer]}!`);
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


