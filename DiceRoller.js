function rollDice() {
    //variables for dice numbers
    var die1 = rollNumber();
    var die2 = rollNumber();
    var die3 = rollNumber();
    var die4 = rollNumber();
    var die5 = rollNumber();

    document.getElementById("diceText").innerHTML = "Dice Values: " + die1 + " " + die2 + " " + die3 + " " + die4 + " " + die5;
}

//function to return random value between 1-6 (inclusive on both ends)
//created to avoid repetetive Math.random statements when initializing variables
function rollNumber() {
    return Math.floor((Math.random() * 6) + 1);
}