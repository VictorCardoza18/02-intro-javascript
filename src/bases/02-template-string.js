const nombre = "Josue";
const apellido = "Cardoza";

// Dentro de los templates se cuentan todos los espacios
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function Saludo(nombre) {
  return `Hola ${nombre}`;
}

console.log(`Template string: ${Saludo()}`);
