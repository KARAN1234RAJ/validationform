const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confPassword = document.getElementById('conf-password')

// add event
form.addEventListener('submit',(event)=>{
     event.preventDefault();
     Validate();
})
// define the validate function
const validate=()=>{
     
     const username = username.value.trim();
     const email = email.value.trim();
     const password = password.value.trim();
     const confPassword = confPassword.value.trim();
     
     //
};