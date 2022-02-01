const defaultThemeInput = document.querySelector('#default-mode-switch');
const lightThemeInput = document.querySelector('#light-mode-switch');
const darkThemeInput = document.querySelector('#dark-mode-switch');
const span = document.querySelector('span');
let theme = localStorage.getItem('theme') || "1";
let spanPosition = localStorage.getItem('spanPosition') || '2px';


const body = document.querySelector('body');

const defaultThemeHandler = () => {
    body.setAttribute('data-mode', 'first');
    theme = '1';
    span.style.left = '2px';

    localStorage.setItem('theme', theme)
    localStorage.setItem('spanPosition', span.style.left);
}


const lightThemeHandler = () => {
    body.setAttribute('data-mode', 'second');
    theme = '2';
    span.style.left = '23px';

    localStorage.setItem('theme', theme)
    localStorage.setItem('spanPosition', span.style.left);
}

const darkThemeHandler = () => {
    body.setAttribute('data-mode', 'third');
    theme = '3';
    span.style.left = '46px';

    localStorage.setItem('theme', theme)
    localStorage.setItem('spanPosition', span.style.left);
}

const checkTheme = () => {
    console.log(localStorage);

    if (localStorage.getItem('theme') === "1" || localStorage.getItem('theme') === null) {
        defaultThemeHandler();
    } else if (localStorage.getItem('theme') === "2") {
        lightThemeHandler();
    } else {
        darkThemeHandler();
    }
}

checkTheme();
defaultThemeInput.addEventListener('click', defaultThemeHandler);
lightThemeInput.addEventListener('click', lightThemeHandler);
darkThemeInput.addEventListener('click', darkThemeHandler);
