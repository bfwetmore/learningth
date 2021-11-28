const pets = [
    {
        name: 'Sam',
        type: 'Dog',
        breed: 'Australian Shepard',
        age: 6,
        photo: 'img/aussie.jpg'
    },
    {
        name: 'Bailey',
        type: 'Dog',
        breed: 'Dachshund',
        age: 4,
        photo: 'img/dachshund.jpg'
    },
    {
        name: 'Goldy',
        type: 'Dog',
        breed: 'Golden Retriever',
        age: 12,
        photo: 'img/golden.jpg'
    },
    {
        name: 'Amdi',
        type: 'Cat',
        breed: 'Persian',
        age: 10,
        photo: 'img/persian.jpg'
    },
    {
        name: 'Ellie',
        type: 'Dog',
        breed: 'Pug',
        age: 9,
        photo: 'img/pug.jpg'
    },
    {
        name: 'Tabby',
        type: 'Cat',
        breed: 'Mixed',
        age: 2,
        photo: 'img/tabby.jpg'
    }
];
let html = '';
for (let i = 0; i < pets.length; i++) {
    console.log(pets[i].name);
    html += `
        <h2>${pets[i].name}</h2>
        <h3>${pets[i].type} | ${pets[i].breed}</h3>
        <p>Age: ${pets[i].age}</p>
        <img src="${pets[i].photo}" alt="${pets[i].breed}">
      `;
}
document.querySelector("main").innerHTML = html;
