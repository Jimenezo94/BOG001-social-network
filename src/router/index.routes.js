import login from '../controllers/login';
import singup from '../controllers/singup';
//login = require('../controllers/login') 
import {afterloading, elementosPost} from '../controllers/post';

let formLogin = document.querySelector(".box-login");
let muro = document.querySelector('.time-line');
let registro = document.querySelector('.singup-up');

const router = async (route) => {
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
       const algo = await elementosPost()
     
       await muro.appendChild(algo);
        return afterloading();
    }
      
    default:
     return console.log('404!!!')
 
}

};
export {router};

