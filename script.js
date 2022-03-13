const selection = ["rock", "paper", "scissors"];

function computerPlay (){
    return selection[Math.floor(Math.random()* selection.length)];
}

let computerSelection = computerPlay();

console.log (computerSelection);

var playerSelection = prompt("Enter rock, paper or scissors.").toLowerCase();

console.log (playerSelection);

function rps(player, computer){
    player = selection.indexOf(player);
    computer = selection.indexOf(computer);

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

console.log (rps(playerSelection, computerSelection));