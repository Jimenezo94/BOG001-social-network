import login from '../pages/login.html'

export default () => {

  const divElement = document.createElement('div');
  divElement.innerHTML = login;
  const button = divElement.querySelector('.log-in');
  let name = divElement.querySelector('#txt-input')
  let pswrd = divElement.querySelector('#pwd')
  button.addEventListener('click', () => {

        event.preventDefault()
        console.log (name.value)
        console.log(pswrd.value)

  })
return divElement
  };