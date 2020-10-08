// Desestructuracion de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];
// Al colocar solo una coma ignora o salta esa posicion del arreglo
const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};
// La desestructuracion de un arreglo es entre corchetes
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Ejercicio

const useState = (valor) => {
  return [valor, () => console.log("Hola mundo")];
};
// Tambien se puede desestructurar un metodo de un arreglo
const [nombre, setNombre] = useState("El pepe");
console.log(nombre);
setNombre();
