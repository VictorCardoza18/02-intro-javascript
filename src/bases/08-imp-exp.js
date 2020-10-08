// import { heroes } from "./data/heroes";
import { heroes, owners } from "../data/heroes";

console.log(owners);
console.log(heroes);
// El argumento de la funcion find sera cada uno de los elementos del array
// Retorna el primer elemento que cumpla la condicion
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(5));
// El metodo filter retorna un array con todos los objetos que cumplan la condicion
export const getAllHeroeByCompany = (company) =>
  heroes.filter((heroe) => heroe.owner === company);

console.log(getAllHeroeByCompany("DC"));
