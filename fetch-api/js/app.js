const selectBreedElement = document.getElementById('breeds');
const breedImgCard = document.querySelector('.card');

selectBreedElement.addEventListener('change', updateBreedValue);
breedImgCard.addEventListener('click', updateBreedValue);
document.querySelector('form').addEventListener('submit', postInputFieldData);

Promise.all([
    fetchData('https://dog.ceo/api/breeds/image/random'),
    fetchData('https://dog.ceo/api/breeds/list')
])
    .then(data => {
        generateImage(data[0].message);
        generateBreedOptionsElement(data[1].message);
    });

function updateBreedValue() {
    let breed = selectBreedElement.value;
    console.log(breed);
    let img = breedImgCard.querySelector('img');
    return fetchBreedImage(img, breed);
}

/**
 * Checks for errors in fetch requests.
 * @param response
 * @returns {Promise<never>|Promise<unknown>}
 */
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
}

/**
 * Imports an image url onto the DOM
 * @param data
 */
function generateImage(data) {
    breedImgCard.innerHTML = `
        <img src='${data}' alt>
        <p>Click to view images of ${selectBreedElement.value}s</p>
        `;
}

/**
 * Utilizes JSON data to create options in Dropdown box
 * @param data
 */
function generateBreedOptionsElement(data) {
    selectBreedElement.innerHTML = data.map(item => `
        <option value='${item}'>${item}</option>
        `).join("");
}

/**
 * Enforces the image to only show user selected breed.
 */
function fetchBreedImage(img, breed) {
    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => {
            editDom(data, img, breed);
        });
}

function editDom(data, img, breed) {
    img.src = data.message;
    img.alt = breed;
    breedImgCard.querySelector('p').textContent = `Click to view more ${breed}s`;
}

/**
 * Collects user input and submits in a POST request.
 * @param e
 */
function postInputFieldData(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const postConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, comment})
    };
    fetchData('https://jsonplaceholder.typicode.com/comments', postConfig)
        .then(data => console.log(data));
}

/**
 * Reusable function for multiple Fetch API's.
 * @param url
 * @param request
 * @returns {Promise<any>}
 */
function fetchData(url, request = null) {
    return fetch(url, request)
        .then(checkStatus)
        .then(response => response.json())
        .catch(error => console.log('There has been an error!', error));
}
