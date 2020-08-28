import singup from '../pages/singup.html'

 
export default () => {
 
   const divRegi = document.createElement('div');
   divRegi.innerHTML = singup;
   const button1 = divRegi.querySelector('#btnnn');
    
   button1.addEventListener("click", () => {
    event.preventDefault()   
    let correo = divRegi.querySelector("#email");
    let contraseña = divRegi.querySelector("#password");

    console.log(correo.value , contraseña.value)
    firebase.auth().createUserWithEmailAndPassword(correo.value, contraseña.value).catch(function(error) {
 

    console.log(error.message);

    });


    /*console.log(contraseña.value)*/
   })

 return divRegi;
};

