/**
 * Create a list of Imported Arrays.
 * @param mon The Parameter for Array Argument.
 * @returns {string} A list of string values, in HTML list format.
 */

function createList(mon) {
    let list = ''
    for (let i = 0; i < mon.length; i++) {
        list += `<li>${mon[i]}</li>`
    }
    return list;
}

// Arrays
const quiz = [
    ['What is my age?', '31'],
    ['What is my favorite color?', 'red'],
    ['What town did I grow up in?', 'bantam']
]
//Write or Wrong answer arrays in quiz
let right = [];
let wrong = [];
let correct = 0;

for (let i = 0; i < quiz.length; i++) {
    let answer = prompt(quiz[i][0])
    if (answer === quiz[i][1]) {
        correct++;
        right.push(quiz[i][0]);
        continue;
    }
    wrong.push(quiz[i][0])

}
document.querySelector("main").innerHTML = `
<h1>You got ${correct} question(s) correct</h1>
<h2>You got these question(s) right!</h2><
<ol>${createList(right)}</ol>
<h2>You got these question(s) wrong :(</h2>
<ol>${createList(wrong)}</ol>
`
