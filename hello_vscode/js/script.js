let button;
let content;

button = document.getElementById('buttonClick');
content = document.getElementById('testDiv');

button.addEventListener('click', event => {
   content.classList.add('test');
})