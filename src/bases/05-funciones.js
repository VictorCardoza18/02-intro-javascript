//Funciones
const Saludar = function (nombre) {
  return `Hola ${nombre}`;
};

// Funcion de flecha
const Saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

// Funcion de flecha de un solo return
const Saludar3 = (nombre) => `Hola ${nombre}`;

console.log(Saludar("Vegeta"));
console.log(Saludar2("Goku"));
console.log(Saludar3("Gohan"));

// Para evitar poner la palabra return se colocan parentesis antes de las llaves
const GetUser = () => ({
  user_ID: "AB2131",
  username: "TROX6875",
});

console.log(GetUser());

// Tarea
// 1. Transformar a funcion Flecha
// 2. Retornar objeto implicito
const GetUsuarioActivo = (nombre) => ({
  userID: "AV6765",
  userName: nombre,
});

const usuarioActivo = GetUsuarioActivo("Josue");
console.log(usuarioActivo);
