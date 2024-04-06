let signUpSuccess = sessionStorage.getItem('signUpSuccess');

function signUp() {

    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert("Please fill in all the required information");
        return;
    }

    sessionStorage.setItem('signUpSuccess', 'true');
    alert("Sign-Up successfull! Redirecting to Home page...");

    window.location.href = '../home.html';

}