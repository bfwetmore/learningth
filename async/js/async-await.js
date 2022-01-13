const peopleList = document.getElementById('people');

async function getAstroInfo(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getPeopleInSpace(url) {
    const peopleJSON = await getAstroInfo(url);
    const profiles = peopleJSON.people.map(async (person) => {
        const craft = person.craft;
        const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
        const astroProfileInfo = await getAstroInfo(wikiUrl + person.name);
        return {...astroProfileInfo, craft};
    });
    return Promise.all(profiles);
}

function generateHTML(data) {
    data.map(person => {
        const section = document.createElement('section');
        peopleList.appendChild(section);
        section.innerHTML = `
            <img src=${person.thumbnail.source}>
            <span>${person.craft}</span>
            <h2>${person.title}</h2>
            <p>${person.description}</p>
            <p>${person.extract}</p>
      `;
    });
}

document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = "Loading...";
    const astrosUrl = 'http://api.open-notify.org/astros.json';
    getPeopleInSpace(astrosUrl)
        .then(generateHTML)
        .catch(e => {
            peopleList.innerHTML = '<h3>Something went wrong</h3>';
            console.error(e);
        })
        .finally(() => event.target.remove());
});
