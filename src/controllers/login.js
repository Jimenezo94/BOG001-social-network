import login from '../pages/login.html'

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = login
  return divElement;
  };