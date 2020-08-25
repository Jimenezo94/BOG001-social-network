export default () => {

  const login = ` 
  <div class = 'signUp__google'>
          <h3> Login whit </h3>
          <button id = "buttonGmail" type = "button">
          <img class = "google-icon" src = "assets / seo-and-web.png" alt = ""> </button>
        </div>
    

      <form id = "formLogin" class = "form">
        <div class = "form-group">
          <input class="form-input" id="txt-input" type="email" placeholder="E-mail" required>
          <br>
        <!--   Password Input-->
          <input class="form-input" type="password" placeholder="Password" id="pwd"  name="password" required>
      
              <!--      Show/hide password  lo del ojito--> 
          <span>
              <i class="fa fa-eye" aria-hidden="true"  type="button" id="eye"></i>
          </span><br>
          <!--      login button -->
          <button class="log-in" type="submits"> Log In </button>
        </div>
      </form>
      <a href = "#/sign-up" class="login-register"> Registrarse </a>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = login
return divElement;
};