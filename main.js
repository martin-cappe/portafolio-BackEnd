//Funcion para el JSON
//await dentro de async
async function obtenerDatos() {
    const response = await fetch("http://127.0.0.1:5500/datos.JSON");
    const json = await response.json();
    return json;
}

//Funcion Normal 
function saludar(nombre) {
    return "Hola " + nombre;
}

//Funcion de flecha
const saludarDos = nombre => alert(`Que onda ${nombre}`)

let nombre = prompt("Como te llamas?");

saludarDos(nombre);
alert(saludar(nombre));

//Objetos

const objPersona = {
    edad: 30,
    nombre: "Tomas",
    vivo: false
}

objPersona.dni = 1;
objPersona.caracteristicas = ["alto", "blanco", "tatuajes"]

console.log(objPersona)

const { edad } = objPersona;

alert(edad)
