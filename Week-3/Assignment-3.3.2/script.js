let playGuessingGame = function (numToGuess, totalGuesses) {
    let count = 1;
    let input = prompt("Enter first guess");
    while (totalGuesses > 0) {
        if (!input) {
            return 0;
        } else if (isNaN(input)) {
            input = prompt("Please enter a number.");
        } else if (input == numToGuess) {
            return count;
        } else if (input < numToGuess) {
            input = prompt(input + " is too small. Guess a larger number.");
            totalGuesses--;
            count++;
        } else if (input > numToGuess) {
            input = prompt(input + " is too large. Guess a smaller number.");
            totalGuesses--;
            count++
        }
    }
    return 0;
};

let input = prompt("Enter a number between 1 and 100.");
if (input) {
    console.log(playGuessingGame(input, 10));
}
