// Arreglos
// const arreglo = new Array(10);
// No utilizar push()
const arreglo = [1, 2, 3, 4];
let arreglo_dos = [...arreglo, 5];

// El metodo map ejecutara la funcion el numero de espacios en el array
// Y retornara uno nuevo
const arreglo_tres = arreglo_dos.map((x) => x + 10);

console.log(arreglo);
console.log(arreglo_dos);
console.log(arreglo_tres);
