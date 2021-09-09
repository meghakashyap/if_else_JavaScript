let readlineSync = require("readline-sync");
var num = readlineSync.questionInt("Enter your age=");
if (num < 10) {
    console.log("Num is less than 10");
}
else if (num > 10 && num<20) {
    console.log("num is less than 20 and more than 10");

}
else{
    console.log("num is more than 20");
}

// comparing number