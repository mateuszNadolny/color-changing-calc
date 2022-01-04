const defaultThemeInput = document.querySelector('#default-mode-switch');
const lightThemeInput = document.querySelector('#light-mode-switch');
const darkThemeInput = document.querySelector('#dark-mode-switch');


const body = document.querySelector('body');


const defaultThemeHandler = () => {
    body.setAttribute('data-mode', 'first');
}


const lightThemeHandler = () => {
    body.setAttribute('data-mode', 'second');
}

const darkThemeHandler = () => {
    body.setAttribute('data-mode', 'third');
}

defaultThemeInput.addEventListener('click', defaultThemeHandler);
lightThemeInput.addEventListener('click', lightThemeHandler);
darkThemeInput.addEventListener('click', darkThemeHandler);