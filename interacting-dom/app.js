const btnCreate = document.getElementById("btn-main");
const btnToggle = document.querySelector(".btn-toggle");
const btnRemove = document.querySelector(".btn-remove");
const taskList = document.querySelector(".list-container ul");
const remove = document.querySelectorAll('li');
for (let i = 0; i < remove.length; i++) {
    attachRemoveButton(remove[i]);
}

function attachRemoveButton(li) {
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}
taskList.addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const li = button.parentNode;
        li.remove();
    }
});

document.addEventListener("click", (event) => {
    console.log(event);
});

btnToggle.addEventListener("click", () => {
    const listContainer = document.querySelector(".list-container");
    if (listContainer.style.display === "none") {
        btnToggle.textContent = "Hide List";
        listContainer.removeAttribute("style");
    } else {
        btnToggle.textContent = "Show List";
        listContainer.style.display = "none";
    }
});

btnCreate.addEventListener("click", () => {
    let ul = document.getElementsByTagName('ul')[0];
    const input = document.querySelector('.input-main');
    let li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
    attachRemoveButton(li);
});

btnRemove.addEventListener("click", () => {
    const li = document.querySelector("li:last-child");
    li.remove();
});
