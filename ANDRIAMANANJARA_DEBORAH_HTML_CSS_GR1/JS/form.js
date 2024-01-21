let form = document.querySelector('form')

let errorContainer = document.querySelector('.message-error')
let errorList = document.querySelector('.message-errorul')

errorList.innerHTML =  ""
errorContainer.classList.remove('visible')


// EMAIL

form.addEventListener('submit', function(event){
    event.preventDefault();

    let email = document.querySelector('#email')

if(email.value == ''){
    errorContainer.classList.add('visible')
    //errorList.classList.add("visible")
    email.classList.remove('success')
    let err = document.createElement('li')
    err.innerText = "Le champ email ne peut pas être vide"
    errorList.appendChild(err)
} else {
    email.classList.add('success')
}
})


// PSEUDO

form.addEventListener('submit', function(event){
    event.preventDefault();

    let pseudo = document.querySelector('#pseudo')



if(pseudo.value.length < 6){
    errorContainer.classList.add('visible')
    pseudo.classList.remove('success')
    let err = document.createElement('li')
    err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"
    errorList.appendChild(err)
} else {
    pseudo.classList.add('success')
}
})


// ENTREE MOT DE PASSE

form.addEventListener('submit', function(event){
    event.preventDefault();

    let password = document.querySelector('#password')
    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );


if(password.value.length < 10 || passCheck.test(password.value) == false){
    errorContainer.classList.add('visible')
    password.classList.remove('success')
    let err = document.createElement('li')
    err.innerText = "Le mot de passe doit contenir 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial"
    errorList.appendChild(err)
} else {
    password.classList.add('success')
}
})



// CONFIRMER MOT DE PASSE

form.addEventListener('submit', function(event){
    event.preventDefault();

    let passwordInitial = document.querySelector('#password')
    let passwordRepeat = document.querySelector('#password2')



if(passwordInitial.value != passwordRepeat.value){
    errorContainer.classList.add('visible')
    password2.classList.remove('success')
    let err = document.createElement('li')
    err.innerText = "Les mots de passes sont différents"
    errorList.appendChild(err)
} else{
    passwordRepeat.classList.add('success')
}
})



// ENVOI FINAL DU FORMULAIRE

let successContainer = document.querySelector('.message-success')
successContainer.classList.remove('visible')

if(
    pseudo.classList.contains('success') &&
    email.classList.contains('success') &&
    password.classList.contains('success') &&
    passwordRepeat.classList.contains('success')
){
    successContainer.classList.add('visible')
}


// LIGHT-MODE
document.addEventListener('DOMContentLoaded', function() {
    var formIcon = document.getElementById("icon");
    var header = document.querySelector(".header")
    var tabHeader = document.querySelectorAll('.headNav')
    const formBody = document.body;
  
    icon.addEventListener('click', function() {
      formBody.classList.toggle('light-mode');
      header.classList.toggle('light-header');
      tabHeader.forEach(onglet =>{ // Ne marche Pas
        onglet.classList.toggle('.headNavLight')
      })
    
      if(document.body.classList.contains("light-mode")){
        formIcon.src = "images/moon.png";
      } else {
        formIcon.src = "images/sun.png";
      }

    });
  });
  