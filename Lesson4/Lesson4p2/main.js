'use strict';

function submit() {

    const regexp_text = /([а-яА-ЯёЁ])/gi;
    const regexp_email = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    const regexp_number = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    const text = document.querySelector('.text').value;
    const number = document.querySelector('.number').value;
    const email = document.querySelector('.email').value;
    const button = document.querySelector('.btn').value;

    if (regexp_text.test(text) !== true) {
        document.querySelector('.text').classList.add('red');
        alert('Введите имя на русском языке');
    } else {
        document.querySelector('.text').classList.remove('red');
    }
    if (regexp_number.test(number) !== true) {
        document.querySelector('.number').classList.add('red');
        alert('Введен некорректный номер телефона');
    } else {
        document.querySelector('.number').classList.remove('red');
    }
    if (regexp_email.test(email) !== true) {
        document.querySelector('.email').classList.add('red');
        alert('Введите свой email');
    } else {
        document.querySelector('.email').classList.remove('red');
    }

}
document.querySelector('.btn').addEventListener('click', submit, true);