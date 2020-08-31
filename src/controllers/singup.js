import singup from '../pages/singup.html'
import { router } from '../router/index.routes';

 
export default () => {
 
   const divRegi = document.createElement('div');
   divRegi.innerHTML = singup;
   const button1 = divRegi.querySelector('#btnnn');
    
   button1.addEventListener("click", () => {
    event.preventDefault()   
    let correo = divRegi.querySelector("#email");
    let contraseña = divRegi.querySelector("#password");

    console.log(correo.value , contraseña.value)
     
    
    firebase.auth().createUserWithEmailAndPassword(correo.value, contraseña.value).then(function
      () {
        router ('#/time-line')
      }).catch(function(error){ 
      let errorCode = error.code;
      let errorMessage = error.message;

      if(errorCode == 'auth/weak-password'){
        alert('The password is too weak.');
      } else { 
        alert(errorMessage);
      }
      console.log(error);

    })
    });


    return divRegi;
    /*console.log(contraseña.value)*/
   }

