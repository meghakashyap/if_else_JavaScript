let readlineSync = require("readline-sync");
var num = readlineSync.questionInt("Enter any number:=");

if (num%2==0){
    console.log("num is diisible by 2");
}
else{
    console.log("Not divisible by 2");
}
// divisible by 2 or not