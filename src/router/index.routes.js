import login from '../controllers/login';
import singup from '../controllers/singup'

let formLogin = document.querySelector(".box-login");
let muro = document.querySelector('.time-line');
let registro = document.querySelector('.singup-up');



const router = (route) => {
    formLogin.innerHTML= ""
    muro.innerHTML=""
    registro.innerHTML=""
    switch (route) {
    case '#/sign-up':
      return registro.appendChild(singup());

    case '#/box-login':{
        return formLogin.appendChild(login());
    }

    case '#/time-line': {
        return console.log(4)
    }
      
    default:
     return console.log('404!!!')
 
}


};
export {router};