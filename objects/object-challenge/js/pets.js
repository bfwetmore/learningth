const path = ('img/');
const pets = [
    {
        name: 'Sam',
        type: 'Dog',
        breed: 'Australian Shepard',
        age: 6,
        photo: 'aussie.jpg'
    },
    {
        name: 'Bailey',
        type: 'Dog',
        breed: 'Dachshund',
        age: 4,
        photo: 'dachshund.jpg'
    },
    {
        name: 'Goldy',
        type: 'Dog',
        breed: 'Golden Retriever',
        age: 12,
        photo: 'golden.jpg'
    },
    {
        name: 'Amdi',
        type: 'Cat',
        breed: 'Persian',
        age: 10,
        photo: 'persian.jpg'
    },
    {
        name: 'Ellie',
        type: 'Dog',
        breed: 'Pug',
        age: 9,
        photo: 'pug.jpg'
    },
    {
        name: 'Tabby',
        type: 'Cat',
        breed: 'Mixed',
        age: 2,
        photo: 'tabby.jpg'
    }
];

let html = '';
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i].name);
    html += `
        <h2>${pets[i].name}</h2>
        <h3>${pets[i].type} | ${pets[i].breed}</h3>
        <p>Age: ${pets[i].age}</p>
        <img src="${path}${pets[i].photo}" alt="${pets[i].breed}">
      `;
}

document.querySelector("main").innerHTML = html;
