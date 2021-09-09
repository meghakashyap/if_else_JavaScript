let readlineSync = require("readline-sync")
var age = readlineSync.questionInt("Enter your age :=")

if (age>5){
    console.log("you can go school")
}
if (age>=18){
    console.log("You can give vote");
}
if (age>=21){
    console.log("You can drive a car");
}
if (age>=24){
    console.log("you can marry");
}
if (age>=25){
    console.log("Legally drink");
}