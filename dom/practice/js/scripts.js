// 1: Set the text of the <h1> element
const headline = document.querySelector('h1');
headline.textContent = `My Activities List`;

// 2: Set the color of the <h1> to a different color
headline.style.color = 'skyblue';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const desc = document.querySelector('.desc');
desc.innerHTML = `<strong>A list of <i>fun</i> things I want to do today.</strong>`;

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>
list.insertAdjacentHTML(
    'beforeend',
    `<li><input> Eat Oreos</li>`
);

// 6: Change all <input> elements from text fields to checkboxes
const change = document.querySelectorAll('input');
for (let i = 0; i < change.length; i++) {
    change[i].type = 'checkbox';
}

/* 7: Create a <button> element, and set its text to 'Delete'
Add the <button> inside the '.extra' <div> */
const button = document.querySelector('.extra');
button.textContent = 'This is extra content you need to delete';
button.insertAdjacentHTML("beforeend", '<button>Delete</button>');

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const remove = document.querySelector('button');
remove.addEventListener('click', () => {
    button.remove();
});
