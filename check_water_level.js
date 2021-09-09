let readlineSync = require("readline-sync");
var liter = readlineSync.questionInt("Enter the water level:=");

if (liter<1){
    console.log("Need to fill more water");
}
else if (liter >=1 && liter <=10){
    console.log("No need to fill water");
}
else{
    console.log("Oerflow");
}

// water level