// Promesas
import { getHeroeById } from "./bases/08-imp-exp";

let x = 10;
const promesa = new Promise((resolve, reject) => {
  if (x === 10) {
    resolve("Los numeros son iguales");
  } else {
    reject("Los numeros no son iguales");
  }
});

promesa.then(console.log).catch(console.warn);

// Mas ejemplos de promesas -----------------------------------

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getHeroeById(id) === undefined) {
        // reject corresponde cuando no se cumple la promesa
        reject("ID no valido");
      } else {
        // resolve conrresponde cuando se cumpe la promesa
        resolve(getHeroeById(id));
      }
    }, 2000);
  });
};

// Los argmentos de la promesa se pasaran como argumento del then y catch
getHeroeByIdAsync(2).then(console.log).catch(console.warn);
