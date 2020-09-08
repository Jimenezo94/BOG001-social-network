import login from '../pages/login.html'
import { router } from '../router/index.routes';

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
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ... 
      router("#/time-line")
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  })


//inicio de sesion
button.addEventListener('click', () => { 
 
  event.preventDefault()
  //console.log (email.value)
  //console.log(pswrd.value)
  firebase.auth().signInWithEmailAndPassword(email.value , pswrd.value)
  .then(function(){router("#/time-line")})
  .catch(function(error)
    {
         
    });

  }) 


return divElement
  };