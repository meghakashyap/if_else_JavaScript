let readlineSync = require("readline-sync");
var number2 = readlineSync.questionInt("Enter any number=");
var number1 = 44 * 30;

if (number1 >= number2){
    console.log("num1 is greater than or equal to num2");
}
else if (number1 <= number2){
    console.log("num2 is greater than or equal to num1");
}
else{
    console.log("num2 is lesse");
}
// #checking number