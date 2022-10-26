'use strict';

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const number = document.querySelector('#number');

const handleInput = function (givenInput) {
    const inputId = givenInput.id;

    if (inputId === 'username') {
        email.value = '';
        number.value = '';
    } else if (inputId === 'email') {
        username.value = '';
        number.value = '';
    } else {
        username.value = '';
        email.value = '';
    }

    // switch (inputId) {
    //     case 'username':
    //         email.value = '';
    //         number.value = '';
    //         break;
    //     case 'email':
    //         username.value = '';
    //         number.value = '';
    //         break;
    //     case 'number':
    //         username.value = '';
    //         email.value = '';
    //         break;
    // }
}

username.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') alert(`Searching with name: ${this.value}`);
});

email.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') alert(`Searching with email: ${this.value}`);
});

number.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') alert(`Searching with mobile number: ${this.value}`);
});