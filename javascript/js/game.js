// create secretNumber
var secretNumber = 4;
var guess = "";

while (guess != secretNumber) {
  // ask user for guess
  var guess = Number(prompt("Guess a number"));

  // check guess
  if (guess === secretNumber) {
    alert("Success!");
  }
  else if (guess > secretNumber) {
    alert("Too high!");
  }
  else if (guess < secretNumber) {
    alert("Too low!");
  }
  else {
    alert("I just don't even.");
  }
}
