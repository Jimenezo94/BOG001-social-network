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
     
    
    firebase.auth().createUserWithEmailAndPassword(correo.value, contraseña.value)
    .then(function
      () {
        router ('#/time-line')
      })
        .catch(function(error){ 
          console.log (error)
   

      if(error.code == 'auth/invalid-email'){
        alert('email invalido.');
      }
       if (error.code == 'auth/weak-password'){ 
        alert('Tu contraseña es muy debil. Escribe minimo 6 caracteres.') 
      }
      if (error.code == 'auth/email-already-in-use'){
        alert('Este correo ya esta en uso.') 
      }
      //console.log(error);

    })
    });


    return divRegi;
    /*console.log(contraseña.value)*/
   }

