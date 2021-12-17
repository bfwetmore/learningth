const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

btnCreate.addEventListener('click', () => {
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');

    list.insertAdjacentHTML(
        'afterbegin',
        `<li>${input.value}</li>`
    );
    input.value = '';
});

btnRemove.addEventListener('click', () => {
    document.querySelector('li:last-child').remove();
});
btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');
    if (listContainer.style.display === 'none') {
        btnToggle.textContent = 'Hide List';
        listContainer.removeAttribute('style');
        return;
    }
    btnToggle.textContent = 'Show List';
    listContainer.style.display = `none`;
});
