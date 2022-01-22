function getAstroNames(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            return callback(data);
        }
    };
    xhr.send();
}

function getAstroProfiles(json) {
    json.people.map((person) => {
        const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
        getAstroNames(wikiUrl + person.name, generateAstroCard);
    });
}

function generateAstroCard(data) {
    const section = document.createElement('section');
    const peopleList = document.getElementById('people');
    peopleList.appendChild(section);
    // Check if request returns a 'standard' page from Wiki
    if (data.type === 'standard') {
        section.innerHTML = `
      <img src=${data.thumbnail.source}>
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <p>${data.extract}</p>
    `;
        return;
    }
    section.innerHTML = `
      <img src="img/profile.jpg" alt="ocean clouds seen from space">
      <h2>${data.title}</h2>
      <p>Results unavailable for ${data.title}</p>
      ${data.extract_html}
    `;
}

document.querySelector('button').addEventListener('click', (e) => {
    const astrosUrl = 'http://api.open-notify.org/astros.json';
    getAstroNames(astrosUrl, getAstroProfiles);
    e.target.remove();
});
