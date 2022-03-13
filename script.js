function computerPlay (){
    const selection = ["Rock", "Paper", "Scissors"];
    return selection[Math.floor(Math.random()* selection.length)];
}

console.log (computerPlay())