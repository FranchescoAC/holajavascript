let div= document.getElementById("container")
let button= document.createElement("button")
button.innerText="Button"

button.addEventListener("click", ()=> alert ("Hola mundo"))

div.appendChild(button)