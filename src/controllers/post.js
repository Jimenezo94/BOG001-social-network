import post from '../pages/post.html'
import { router } from '../router/index.routes';


export default () => { 

    const divElement = document.createElement('div'); //Crea elemnto html llamado division
    divElement.innerHTML = post;

    let out = divElement.querySelector('.outb');
    out.addEventListener('click', () => {

        event.preventDefault()
       firebase.auth().signOut().then(function(){router("#/box-login")}).catch(function(error)
       {
       
      });
        //console.log("sisirve")
      })
      return divElement
 
};