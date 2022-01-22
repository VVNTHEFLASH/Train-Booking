//Redirect to Login Page Automatically
// --------------------------------------

// content about redirect

// --------------------------------------

// lets get data and make ticket template

let from = localStorage.getItem('from');
let to = localStorage.getItem('to');

let Tfrom = document.getElementById('from');
let Tto = document.getElementById('to');

Tfrom.innerHTML = from;
Tto.innerHTML = to;

let adult = localStorage.getItem('adult');
let child = localStorage.getItem('child');

let Tadult = document.getElementById('adult');
let Tchild = document.getElementById('child');

Tadult.innerHTML = adult;
Tchild.innerHTML = child;

// class and return goes tricky
let Class = localStorage.getItem('class');
let Return = localStorage.getItem('return');

let Tclass = document.getElementById('class');
let Treturn = document.getElementById('return');

Tclass.innerHTML = Class;
Treturn.innerHTML = Return;

// total price 
let price = localStorage.getItem('total');
let Total = document.getElementById('total');

Total.innerHTML = price;