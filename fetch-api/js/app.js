const selectBreedElement = document.getElementById('breeds');
const breedImgCard = document.querySelector('.card');

selectBreedElement.addEventListener('change', updateBreedValue);
breedImgCard.addEventListener('click', updateBreedValue);
document.querySelector('form').addEventListener('submit', getElementInput);

Promise.all([
    fetchData('https://dog.ceo/api/breeds/image/random'),
    fetchData('https://dog.ceo/api/breeds/list')
])
    .then(data => {
        generateImage(data[0].message);
        generateBreedOptionsElement(data[1].message);
    });

/**
 * Checks for errors in fetch requests.
 * @param response Response from fetchData method
 * @returns Back to method, or returns error in console.
 */
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
}

/**
 * Imports an image url onto the DOM
 * @param data Random IMG JSON
 */
function generateImage(data) {
    breedImgCard.innerHTML = `
        <img src='${data}' alt>
        <p>Click to view images of ${selectBreedElement.value}s</p>
        `;
}

/**
 * Utilizes JSON data to create options in Dropdown box
 * @param data Pet Breed list API JSON data.
 */
function generateBreedOptionsElement(data) {
    selectBreedElement.innerHTML = data.map(item => `
        <option value='${item}'>${item}</option>
        `).join("");
}

/**
 * Updates the variables currently selected breed in the dropdown box.
 */
function updateBreedValue() {
    let breed = selectBreedElement.value;
    console.log(breed);
    let img = breedImgCard.querySelector('img');
    return fetchBreedImage(img, breed);
}

/**
 * Fetches breed images JSON data from API
 */
function fetchBreedImage(img, breed) {
    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => {
            editDom(data, img, breed);
        });
}

/**
 * Edits the DOM according to the currently selected breed.
 * @param data Random generated URL extracted from API
 * @param img The URL to be displayed
 * @param breed The name to be show in the text below the image.
 */
function editDom(data, img, breed) {
    img.src = data.message;
    img.alt = breed;
    breedImgCard.querySelector('p').textContent = `Click to view more ${breed}s`;
}

/**
 * Takes user input and prepares a POST request
 * @param e Event listener to prevent Default of page reload after form Submission
 */
function getElementInput(e){
    e.preventDefault();
    const nameFormElement = document.getElementById('name').value;
    const commentFormElement = document.getElementById('comment').value;
    const postConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: nameFormElement, comment: commentFormElement})
    };
    return postInputFieldData(postConfig)
}

/**
 * Sends POST request.
 * @param postConfig Assembled POST request
 */
function postInputFieldData(postConfig) {
    fetchData('https://jsonplaceholder.typicode.com/comments', postConfig)
        .then(data => console.log(data));
}

/**
 * Reusable function for multiple Fetch API's.
 * @param url The API
 * @param request optional parameter for request type
 * @returns {Promise<any>}API info parsed into JSON format.
 */
function fetchData(url, request = null) {
    return fetch(url, request)
        .then(checkStatus)
        .then(response => response.json())
        .catch(error => console.log('There has been an error!', error));
}
