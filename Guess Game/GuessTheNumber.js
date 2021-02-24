const prompt = require("prompt-sync")({ sigint: true });
const colors = require("colors");

colors.setTheme({
  hint: "cyan",
  big: "red",
  small: "yellow",
  success: "green",
  background: "bgMagenta",
  text: "black",
});

const numberToGuess = Math.floor(Math.random() * 100) + 1;
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
  let guess = prompt("Guess a number from 1 to 100 : ");
  guess = Number(guess);

  if (guess > 100 || guess < 1) {
    console.log("You know this is worng!".red);
  } else {
    if (guess === numberToGuess) {
      console.log("Congrats, you got it!".success);
      foundCorrectNumber = true;
    } else {
      console.log("Sorry, guess again!");
      if (guess < numberToGuess)
        console.log("Hint".hint + " - " + "Much small".small);
      else console.log("Hint".hint + " - " + "Too big".red);
    }
  }
}
