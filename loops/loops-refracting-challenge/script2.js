/**
 * Generates a random number for rgb
 *
 * @returns {number}
 */
let x = () => Math.floor(Math.random() * 256);

for (let i = 1; i <= 10; i++) {

    let randomRGB = `rgb( ${x()}, ${x()}, ${x()} )`;
    let html = `<div style="background-color: ${randomRGB}">${i}</div>`;
    document.querySelector('main').innerHTML += html

}
