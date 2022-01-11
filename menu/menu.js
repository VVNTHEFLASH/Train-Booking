//Logout button
var logout = document.getElementById('logout-btn');

logout.onclick = () => {
    window.location.href = '../index.html';
}
//List Of Train Tickets
var normal = document.getElementById('normal-train');
var superfast = document.getElementById('superfast-train');
var express = document.getElementById('express');

normal.onclick = () => {
    window.location.href = "../NormalTicket/normal.html";
}
superfast.onclick = () => {
    window.location.href = "../NormalTicket/normal.html";
}
express.onclick = () => {
    window.location.href = "../NormalTicket/normal.html";
}