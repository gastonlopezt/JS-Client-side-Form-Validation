const form = document.getElementById('form')
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-check');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs()
});

function checkInputs(){

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === '') {

    setErrorFor(username, 'Username cannot be blank');
  } else {

      setSuccesFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccesFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccesFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password check cannot be blank");
  } else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Password does not match')
  } else {
    setSuccesFor(password2);
  }
}




function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  //add error message inside small
  small.innerText = message;
  //add error class
  formControl.className = 'form-control error'
}

function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}