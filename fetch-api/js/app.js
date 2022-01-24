const select = document.getElementById('breeds');
const card = document.querySelector('.card');

select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);
document.querySelector('form').addEventListener('submit', postInputFieldData);

Promise.all([
    fetchData('https://dog.ceo/api/breeds/image/random'),
    fetchData('https://dog.ceo/api/breeds/list')
])
    .then(data => {
        generateImage(data[0].message);
        generateBreedOptions(data[1].message);
    });

//Functions:
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
}

function generateImage(data) {
    card.innerHTML = `
        <img src='${data}' alt>
        <p>Click to view images of ${select.value}s</p>
        `;
}

function generateBreedOptions(data) {
    select.innerHTML = data.map(item => `
        <option value='${item}'>${item}</option>
        `).join("");
}

function fetchBreedImage() {
    const breed = select.value;
    const img = card.querySelector('img');

    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => {
            img.src = data.message;
            img.alt = breed;
            card.querySelector('p').textContent = `Click to view more ${breed}s`;
        });
}

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

function fetchData(url, request) {
    return fetch(url, request)
        .then(checkStatus)
        .then(response => response.json())
        .catch(error => console.log('There has been an error!', error));
}
