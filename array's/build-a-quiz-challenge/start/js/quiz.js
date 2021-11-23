// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
    ['What is my age?', '31'],
    ['What is my favorite color?', 'red'],
    ['What town did I grow up in?', 'bantam']
]

// 2. Store the number of questions answered correctly
let correct = 0

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < quiz.length; i++) {
    let answer = (prompt(quiz[i][0]))
    if (answer === quiz[i][1]) {
        correct++
    }
}

document.querySelector("main").innerHTML = `
<h1>You got ${correct} question(s) correct</h1>
`


// 4. Display the number of correct answers to the user