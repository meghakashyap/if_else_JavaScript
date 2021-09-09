let readlineSync = require("readline-sync");
var cmpt_moves = ["rock","paper","scissors"];
var random_move = cmpt_moves[Math.floor(Math.random()*cmpt_moves.length)];

var name = readlineSync.question("Enter your name:=");
console.log("hello",name,"!")
console.log("Choose any move from = rock,paper and scissor")
var move = readlineSync.question("Enter your Option:=")

if (move == random_move){
    console.log("Draw")
}
else if (move == "rock" && random_move =="paper"){
console.log("Computer win");
}
else if (move == "paper" && random_move =="rock"){
console.log(name+" win");
}
else if (move == "paper" && random_move =="scissors"){
console.log("Computer win");
}
else if (move == "Scissors" && random_move =="paper"){
console.log(name+" win");
}
else if (move== "scissors" && random_move=="rock"){
console.log("Computer win");
}
else if (move== "rock" && random_move=="scissors"){
console.log(name+" win");
}
else{
console.log("Got confused!")
}


