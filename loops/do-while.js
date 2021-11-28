function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

let counter = 0;
do {
    console.log(`Here is a random number ${getRandomNumber(10)}`)
    counter++;
} while (counter < 1);
