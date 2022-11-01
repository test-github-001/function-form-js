'use strict';

let login = '';
let pass = '';

function updateLogin(value) {
    login = value;
}

function updatePass(value) {
    pass = value;
}

function send() {
    console.log('login:', login);
    console.log('pass :', pass );
}

