const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 27,
  direccion: {
    ciudad: "New York",
    zip: 32482374,
    lat: 14.234124,
    lng: 17.1231231,
  },
};

// Utilizando los 3 puntos creamos un clon del objeto

const persona_dos = { ...persona };
persona_dos.nombre = "Doctor";
persona_dos.apellido = "Strange";

console.table(persona);
console.table(persona_dos);
