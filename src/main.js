import './main.scss' ;

import {router} from './router/index.routes'

router('#/box-login')

window.addEventListener('hashchange', () => {
    router(window.location.hash)
})


// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';
//myFunction();
