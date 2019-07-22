//Working with login button
const loginButton = document.getElementById('login-button');
const closeButton = document.getElementById('close');
const signupButton = document.getElementById('signup-button');
const closesignup = document.getElementById('close-signup');


//Function that hide section with id
const hideSection = (id) => {
    document.getElementById(id).classList.add('hide');
};
//Function that show section with id
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
};

//Functionability for help button and close button
const showlogin = () => showSection('Login');
const closelogin = () => hideSection('Login');
const showsignup = () => showSection('signup');
const closesp = () => hideSection('signup');


loginButton.addEventListener("click", showlogin);
closeButton.addEventListener("click", closelogin);
signupButton.addEventListener("click", showsignup);
closesignup.addEventListener("click", closesp);