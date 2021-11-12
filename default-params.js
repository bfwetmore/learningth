const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
};


const getArea = (width, length, unit) => {
    const area = width * length;
    return `${area} ${unit}`;
}

const num1 = parseFloat(prompt("Please enter a number"))
const num2 = parseFloat(prompt('Please enter a number'))
const unit = prompt("Please tell me what unit you are using")

console.log(getArea(num1, num2, unit))