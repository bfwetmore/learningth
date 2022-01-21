const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then(data => generateImage(data.message));
fetch('https://dog.ceo/api/breeds/list')
    .then((breedResponse) => breedResponse.json())
    .then((breedData) => generateBreedOptions(breedData.message));
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------


function generateImage(data) {
    const html = `
    <img src='${data}' alt>
    <p>Click to view images of ${select.value}s</p>
    `;
    card.innerHTML = html;
}

function generateBreedOptions(breedData) {
    const options = breedData.map(item => `
<option value='${item}'>${item}</option>
`).join("");
    select.innerHTML = options;
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------


// ------------------------------------------
//  POST DATA
// ------------------------------------------

