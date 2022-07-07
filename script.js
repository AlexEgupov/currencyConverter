'use strict';

const from = document.getElementById('from');
const fromOptions = from.querySelectorAll('option');
const to = document.getElementById('to');
const toOptions = to.querySelectorAll('option');
const form = document.querySelector('form');
const inputFrom = form.querySelectorAll('input')[0];
const inputTo = form.querySelectorAll('input')[1];
const textFrom = document.querySelector('.from');
const textTo = document.querySelector('.to');

let currencyCodeFrom;
let currencyCodeTo;
let currencyTextFrom;
let currencyTextTo;

const converter = (inputValue) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "CdauoD22CRx23s0DRz1j8Wg8DKDWKgTN");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyCodeTo}&from=${currencyCodeFrom}&amount=${inputValue}`, requestOptions)
        .then(response => response.json())
        .then(result => inputTo.value = result.result.toFixed(2))
        .catch(error => console.log(error.message));
};

from.addEventListener('change', (e) => {
    currencyCodeFrom = e.target.value;
    currencyTextFrom = from.options[from.selectedIndex].text;
});

to.addEventListener('change', (e) => {
    currencyCodeTo = e.target.value;
    currencyTextTo = to.options[to.selectedIndex].text;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    textFrom.textContent = `${currencyTextFrom} (${currencyCodeFrom})`;
    textTo.textContent = `${currencyTextTo} (${currencyCodeTo})`;

    converter(inputFrom.value);

});