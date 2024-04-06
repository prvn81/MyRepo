 let loginSuccess = sessionStorage.getItem('loginSuccess');

function login() { 

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert("Please fill in all the required information");
        return;
    }

    sessionStorage.setItem('loginSuccess', 'true');
    alert("Log-In successfull! Redirecting to Home page...");

    window.location.href = '../index.html';
}
