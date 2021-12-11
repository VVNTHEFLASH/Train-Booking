//get the button {}
let button = document.getElementById('login-btn');
//Assign demo user mail and pass
let email = "bttbooking@gmail.com";
let password = "btt12345678";
//add event listener to login
button.onclick = () => {
    //get email and password value
    let $email = document.getElementById('email').value;
    let $pass = document.getElementById('password').value;
    //check the pass and mail 
    if($email === email && $pass === password) {
        window.location.href = './menu/menu.html';
    }
    else {
        document.getElementsByClassName('error')[0].style.display='block';
    }
    event.preventDefault()
}