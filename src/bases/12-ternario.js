const activo = true;
// Este es un if con su else
const GetEstado = activo ? "Activo" : "Inactivo";
// Este es solo el if, sin else
const GetEstado_2 = activo && "Activo";

console.log(GetEstado);
console.log(GetEstado_2);
