export default () => {
 
    const nose = `;

    <h1 class = "title container-form">
       Registrate
    </h1>
      <form id = "formSignUp" class = "form">
        <div class = "form-group">
          <input id = "username" type = "text" placeholder = "User name" obligatorio>
      
        </div>
        <div class = "form-group">
          <input id = "email" type = "email" placeholder = "Correo" obligatorio>
        </div>
     
        <div class = "form-group">
          <input id = "city" type = "text" placeholder = "Ciudad" obligatorio>
       
        </div>
        <div class = "contraseña de grupo de formulario - contenedor">
          <input type = "password" id = "password" placeholder = "Contraseña" obligatorio>
   
          <span class = "eye-icon" id = "eyeIcon"> </span>
        </div>
        <button id = "button" class = "btns" type = "submit"> Registrador </button>
      </form>
      <div class = "signUp-google">
        <h3> o registrate con </h3>
        <button id = "buttonGmail" type = "button"> <img class = "google-icon" src = ".png" alt = ""> </button>
      </div>
      <div class = "signUp-google">
      <h3> ¿Ya tienes cuenta? </h3>
      <a href="#/box-login" id="signupGoogle" class="login-register"> Inicia Sesion </a>
      </div>
    
   `;
   let divRegi = document.createElement('div');
   divRegi.innerHTML = nose
   return divRegi;

let button = document.querySelector('.btns');
 button.addEventListener("submit", () => {
     console.log("bb");
 };

}