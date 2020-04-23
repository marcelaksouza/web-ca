
//create function
let createButton = document.getElementById('createPetButton');
createButton.addEventListener("click", evt => {

    let body = {
        name: document.querySelector('#petname').value,
        age: document.querySelector('#age').value,
        description: document.querySelector('#description').value,
        group: document.querySelector('#animalclass').value,
        type: document.querySelector('#animaltype').value,

    }

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:3000/pet', options)
        .then(res => res.json())
        .then(res => {
            document.getElementById("notAdopted").click();
            document.getElementById("createPetForm").reset();
            //getAll("false");
            console.log(res)
        });
});