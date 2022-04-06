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
    currentBtn.addEventListener("click", showId);
})


function playRPS(player){
    player = selection.indexOf(player);
    computer = selection.indexOf(computerPlay());

    let result = player - computer;

    if (result == 0) {
        return `Tie! The computer picked ${selection[computer]}.`;
    } else if (result == -1 || result == (selection.length-1)) {
        let winningSelection = selection[computer].charAt(0).toUpperCase() + selection[computer].slice(1);
        return `You lose! ${winningSelection} beats ${selection[player]}.`;
    } else if (result == 1 || result == (-1*(selection.length-1))){
        let winningSelection = selection[player].charAt(0).toUpperCase() + selection[player].slice(1)
        return `You win! ${winningSelection} beats ${selection[computer]}!`;
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


