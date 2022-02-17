const nam = document.getElementById("name");
const password= document.getElementById("password");
const form = document.getElementById("form");
const  errorElement =  document.getElementById("error"); 

form.addEventListener('submit', (e)=>{
let messages = []
if (nam.value=== '' || nam.value ==null){
    messages.push('name is required')
    e.preventDefault()
}
if (password.value.length< 6){
    messages.push('password must be longer than 6 characters')
}

if (messages.length > 0){
    e.preventDefault()
errorElement.innerHTML = messages.join(', ')
}


})