import { router } from '../router/index.routes';
import singup from '../pages/singup.html';
 
export default () => { 
 
   const divRegi = document.createElement('div');
   divRegi.innerHTML = `
   <div class="contForm">
     <div class="signup-logo">
       
     </div>
   
     <h1 class = "title container-form">
       Registrate
     </h1>
     <form id = "formSignUp" class = "form">
   
       <div class = "form-group">
         <input class = "form-input" id = "email" type = "text" placeholder = "Correo" obligatorio>
       </div>
   
       <div class = "form-group">
          <input class = "form-input" id = "username" type = "text" placeholder = "User" obligatorio>
      
       </div>
   
     
       <div class = "contraseña user">
          <input class = "form-input"  type = "password" id = "password" placeholder = "Contraseña" obligatorio>
   
          <span class = "eye-icon" id = "eyeIcon"> </span>
       </div>
       <button type="submits" id = "btnnn" class = "btns" > Registrador </button>
     </form>
      
      <h3> ¿Ya tienes cuenta? </h3>
      <a href="#/box-login" id="return-login" class="login-register"> Inicia Sesion </a>
      
   </div>`;
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

