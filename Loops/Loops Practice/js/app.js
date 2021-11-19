/**
 * Random Number generator
 *
 * @param upper the maximum number that can be generated
 * @returns {number}
 */
function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
console.log(randomNumber)
let i;
for (i = 1; i < 10; i++) {
    console.log(i)
    let guess = parseInt(prompt('I am thinking of a number between 1 & 10'));
    if (guess === randomNumber) {
        break;
    }
}
main.innerHTML = `<h1>CORRECT! It took you ${i} times to guess ${randomNumber} </h1> `
if (i === 10) {
    main.innerHTML = `<h1>Too many tries, the answer was ${randomNumber}.`
}

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number