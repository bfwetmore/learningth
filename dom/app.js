const headline = document.getElementById('headline');
const btnmain = document.getElementById('btn-main')
const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
    
}
style.backgroundColor = 'skyblue'
btnmain.addEventListener('click', () => {
    headline.style.border = 'solid 2px red';
});
