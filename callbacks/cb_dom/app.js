const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusHandler = e => {
    e.target.className = 'highlight';
};

const blurHandler = e => {
    e.target.className = '';
};
nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler);
