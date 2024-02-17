let home = document.getElementById('h-home');
let about = document.getElementById('a-about');
let project = document.getElementById('p-project');
let js = document.getElementById('js-project');
let contact = document.getElementById('c-contact');




home.addEventListener('click', () => {
    home.style.color = 'orange ' ;
    about.style.color = "#fff";
    project.style.color = "#fff";
    js.style.color = "#fff";
    contact.style.color = "#fff";
})

about.addEventListener('click', () => {
    home.style.color = '#fff' ;
    about.style.color = 'orange';
    project.style.color = '#fff';
    js.style.color = '#fff';
    contact.style.color = '#fff';
})

project.addEventListener('click', () => {
    home.style.color = '#fff' ;
    about.style.color = '#fff';
    project.style.color = 'orange';
    js.style.color = '#fff';
    contact.style.color = '#fff';
})

js.addEventListener('click', () => {
    home.style.color = '#fff' ;
    about.style.color = '#fff';
    project.style.color = '#fff';
    js.style.color = 'orange';
    contact.style.color = '#fff';
})

contact.addEventListener('click', () => {
    home.style.color = '#fff' ;
    about.style.color = '#fff';
    project.style.color = '#fff';
    js.style.color = '#fff';
    contact.style.color = 'orange';
})


