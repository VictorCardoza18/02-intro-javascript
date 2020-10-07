// Desesructuracion
// Asignacion Desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "IronMan",
};

// Si no se asinga la propiedad podemos poner uno por defecto {"Capitan"}
const UseContext = ({ nombre, edad, clave, rango = "Capitan" }) => ({
  nombreClave: clave,
  edadAños: edad,
  rangoPersonal: rango,
  Lat_Long: {
    lat: 32.12312,
    long: -23.3213,
  },
});

const {
  nombreClave,
  edadAños,
  rangoPersonal,
  Lat_Long: { lat, long },
} = UseContext(persona);

console.log(nombreClave, edadAños);
console.log(lat, long);
console.log(rangoPersonal);
