
//update To adopt table 
const toAdoptUpdate = (id, petname, age, animalClass, animalType, description) => {
    console.log("toAdoptUpdate")
    let body = {
        name: document.getElementById(petname).innerText,
        age: document.getElementById(age).innerText,
        description: document.getElementById(description).innerText,
        group: document.getElementById(animalClass).innerText,
        type: document.getElementById(animalType).innerText,
    }
    console.log(body)
    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:3000/pet/' + id, options)
        .then(res => res.json())
        .catch((err) => {
            console.log(err);
        })
};


//update adopted table 
const adoptedUpdatepet = (id, petname, age, animalClass, animalType, description, ownerName, ownerAddress) => {
    console.log("adoptedUpdatepet")
    let body = {
        name: document.getElementById(petname).innerText,
        age: document.getElementById(age).innerText,
        description: document.getElementById(description).innerText,
        group: document.getElementById(animalClass).innerText,
        type: document.getElementById(animalType).innerText,
        owner:
        {
            name: document.getElementById(ownerName).innerText,
            address: document.getElementById(ownerAddress).innerText,
        }
    }
    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:3000/pet/' + id, options)
        .then(res => res.json())
        .then(res => {
           console.log(res);
        }).catch((err) => {
            console.log(err);
        })
};


//owner update
const ownerUpdate = (id) => {
    console.log("ownerUpdate")
    let body = {
        owner:
        {
            name: document.querySelector('#petname').value,
            address: document.querySelector('#age').value,
        }
    }

    console.log(body)
    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:3000/pet/' + id, options)
        .then(res => res.json())
        .then(res => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
}