let readlineSync = require("readline-sync");
var varx = readlineSync.questionInt("Enter number 1:=");
var vary = readlineSync.questionInt("Enter number 2:=");

if (varx%vary == 0){
    console.log("Divisible");
}
else{
    console.log("Not Divisible");
}
