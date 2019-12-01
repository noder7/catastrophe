const container = document.querySelector('.container');
const usernameForm = document.querySelector('.username-form');
const inputUsername = document.querySelector('.username');
const startBtn = document.querySelector('.start');

const USER_NAME = 'username';

function checkUsername(){
    const username = localStorage.getItem(USER_NAME);
    if(username === null){
        inputUsername.style.display = 'inline';
    }else{
        displayName();
    }
}
function saveUsername(data) {
    localStorage.setItem(USER_NAME, data);
}
function loadUsername() {
    return localStorage.getItem(USER_NAME);
}
function displayName(){
    const span = document.createElement('span');
    span.innerText = `Welcome! ${loadUsername()}`;
    usernameForm.appendChild(span);
    span.classList.add('displayedName');
    startBtn.style.display = 'inline';
}
function handleSubmit(event){
    // event.preventDefault();
    checkUsername();
    saveUsername(inputUsername.value);
    displayName();
}

usernameForm.addEventListener('submit', handleSubmit);

function init() {
    checkUsername();
}
init();