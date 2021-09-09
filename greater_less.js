let readlineSync = require("readline-sync");
var num1= readlineSync.questionInt("Enter number 1:=");
var num2 = readlineSync.questionInt("Enter number 2:=");

if (num1 > num2){
    console.log("number 1 is greater")
}
else{
    console.log("number 2 is greater")
}