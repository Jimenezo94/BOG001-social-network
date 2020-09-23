import {router} from '../router/index.routes';
import login from '../pages/login.html';

export default () => {

  const divElement = document.createElement('div');
  divElement.innerHTML = login;

  let button = divElement.querySelector('.log-in');
  let email = divElement.querySelector('#txt-input')
  let pswrd = divElement.querySelector('#pwd')
  let buttonG = divElement.querySelector('#buttonGoogle') 

  let provider = new firebase.auth.GoogleAuthProvider();

 //sesion con google
  buttonG.addEventListener('click', () => {
    event.preventDefault()
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      let token = result.credential.accessToken;
      router("#/time-line")
    }).catch(function(error) {
    
    });
  })


//inicio de sesion
button.addEventListener('click', () => { 
 
  event.preventDefault()
 
  firebase.auth().signInWithEmailAndPassword(email.value , pswrd.value)
  .then(function(){router("#/time-line")})
  .catch(function(error) 
    {        //console.log(error.code)
      
      if (error.code == "auth/wrong-password") {
        alert ("contraseña incorrecta")
      }
      else if (error.code == "auth/invalid-email"){
        alert ("email incorrecto")
      }
      else if (error.code === "auth/user-not-found"){
        alert ("usuario incorrecto")
      }
         
    });

  }) 


return divElement
  };