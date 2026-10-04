// select by id
const abc = document.getElementById("id")

// select by class
const cde = document.getElementsByClassName("c")

cde[0].addEventListener("click", eventFunc)

abc.addEventListener("click", eventFunc)

for (let i = 0; i < cde.length; i++) {
    cde[i].addEventListener("click", eventFunc2)    
}

function eventFunc() {
    alert("Last warning!")
}

function eventFunc2 () {
    confirm("Are you sure")
}