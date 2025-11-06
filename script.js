let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function validateNumber() {
    let number = document.querySelector('input[name="number"]').value;
    if (!/^\d{10}$/.test(number)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false; // stop form submission
    }
    return true;
}

