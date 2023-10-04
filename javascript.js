const button = document.getElementById("diceGame")
const die1 = document.getElementById("die1");
const die2 = document.getElementById("die2");
const die1Image = document.getElementById("die1Image");
const die2Image = document.getElementById("die2Image");
const total = document.getElementById("total");

button.addEventListener("click", diceRoll);

function diceRoll() {
    die1.innerHTML = rollDie();
    die2.innerHTML = rollDie();
    die1Image.src = "images/" + parseInt(die1.innerHTML) + ".png"
    die2Image.src = "images/" + parseInt(die2.innerHTML) + ".png"
    total.innerHTML = "Total:  " + (parseInt(die1.innerHTML) + parseInt(die2.innerHTML))
}

function rollDie() {
    return parseInt(Math.random() * 6) + 1;
}