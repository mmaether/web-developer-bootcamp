var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  // Mode button event listeners
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      if(this.textContent === "Easy"){
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset(numSquares);
    })
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    // Add click listeners to squares
    squares[i].addEventListener("click", function(){
      // Grab color of clicked sqaure
      var clickedColor = this.style.backgroundColor;

      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  // Generate all new colors
  colors = generateRandomColors(numSquares);
  // Pick a new random color from array
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;

  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  // Change the colors of the squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

/*
 * Event listener to reset the game.
 */
resetButton.addEventListener("click", function(){
  reset();
});

/*
 * Function to change the color of all the squares
 */
function changeColors(color){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

/*
 * Function to randomly select a singular color.
 * @return a number between 0 and the length of the colors array
 */
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

/*
 * Generates random colors to push into an array
 * @param the number of colors to generate
 */
function generateRandomColors(num){
  // Make an array
  var arr = [];
  // Repeat num times
  for(var i = 0; i < num; i++){
    // Get random color and push into array
    arr.push(randomColor());
  }
  // Return that array
  return arr;
}

/*
 * Generates a string of a randomized color as rgb(r, g, b) value
 */
function randomColor(){
  // Pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // Pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // Pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
