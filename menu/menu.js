//Logout button
var logout = document.getElementById('logout-btn');

logout.onclick = () => {
    window.location.href = '../index.html';
}
//List Of Train Tickets
var normal = document.getElementById('normal-train');
var superfast = document.getElementById('superfast-train');
var express = document.getElementById('express-train');

normal.onclick = () => {
    window.location.href = "../NormalTicket/normal.html";
}
superfast.onclick = () => {
    window.location.href = "../SuperfastTicket/superfast.html";
}
express.onclick = () => {
    window.location.href = "../ExpressTicket/express.html";
}

//flip click
let nt = document.querySelector('.nt');
let st = document.querySelector('.st');
let et = document.querySelector('.et');

nt.onclick = () => {
    window.location.href = "../NormalTicket/normal.html";
}
st.onclick = () => {
    window.location.href = "../SuperfastTicket/superfast.html";
}
et.onclick = () => {
    window.location.href = "../ExpressTicket/express.html";
}