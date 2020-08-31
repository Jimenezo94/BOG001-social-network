import login from '../pages/login.html'
import { router } from '../router/index.routes';

export default () => {

  const divElement = document.createElement('div');
  divElement.innerHTML = login;
  const button = divElement.querySelector('.log-in');
  let email = divElement.querySelector('#txt-input')
  let pswrd = divElement.querySelector('#pwd')
  button.addEventListener('click', () => {

        event.preventDefault()
        //console.log (email.value)
        //console.log(pswrd.value)
        firebase.auth().signInWithEmailAndPassword(email.value , pswrd.value).then(function(){router("#/time-line")}).catch(function(error)
         {
         
        });

  }) 
return divElement
  };