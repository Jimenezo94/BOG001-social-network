import singup from '../pages/singup.html'

export default () => {
 
   const divRegi = document.createElement('div');
   divRegi.innerHTML = singup;
   const button1 = divRegi.querySelector('#btnnn');
   button1.addEventListener("click", () => {
       alert("fasd")
   })

   return divRegi;

};



