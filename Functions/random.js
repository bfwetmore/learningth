/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
const randomnumber = (lower, upper) => {
    return Math.floor(Math.random() * (lower - upper + 1)) + upper;
}
const lower = parseFloat(prompt("Random Generator! Pick a number"))
const higher = parseFloat(prompt("Pick a second number that's higher"))
console.log(randomnumber(lower, higher))
// Call the function and pass it different values


