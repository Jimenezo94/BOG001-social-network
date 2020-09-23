// importamos la funcion que vamos a testear
//import {  } from "../src/lib/index";
import login from '../src/controllers/login';


describe('login', () => {
  it('debería ser una funcion', () => {
    expect(typeof login).toBe('funcion');
  });
});
