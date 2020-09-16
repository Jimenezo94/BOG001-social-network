import './main.css' ;

import {router} from './router/index.routes'


firebase.auth().onAuthStateChanged(function(user) { //escuchador de estado de utenticacion
    if (user) {
        router('#/time-line')

    } else {
        router('#/box-login')
    }
  
  });
  
window.addEventListener('hashchange', () => {
    router(window.location.hash)
})
