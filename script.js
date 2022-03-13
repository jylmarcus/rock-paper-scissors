function computerPlay (){
    const selection = ["rock", "paper", "scissors"];
    return selection[Math.floor(Math.random()* selection.length)];
}

let computerSelection = computerPlay();

console.log (computerSelection);

var playerSelection = prompt("Enter rock, paper or scissors.").toLowerCase();

console.log (playerSelection);