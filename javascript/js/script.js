var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");
console.log("Your full name is, " + firstName + " " + lastName + ".");
console.log("You are " + age + " years old.")


if (age < 18) {
  cantEnter();
}
else if (age < 21) {
  enterNoDrink();
}
else if (age < 0) {
  console.log("error");
}
else if (age % 2 !== 0) {
  console.log("Odd?");
}
else if (age % Math.sqrt(age) === 0) {
  console.log("perfect square!");
}
else {
  drinkMofo();
}
