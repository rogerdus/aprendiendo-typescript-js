"use strict";
///uso normal 
function saludo(nombre) {
    return "Hola " + nombre;
}
console.log(saludo("pedro"));
///nada void
function mostrarFecha() {
    console.log(new Date());
}
mostrarFecha();
//Never fin de la aplicacion
function finApp() {
    throw new Error("La aplicacion se a cerrado ...");
}
//finApp();
///parametros en funciones
function mostrarPais(pais = "Mexico", continente = "America") {
    return "El pais es " + pais + " y su continente es " + continente;
}
console.log(mostrarPais("Colombia"));
//Tipo Funcion
let grupos;
grupos = function (datos) {
    return "Mis grupos favoritos son" + datos.toString();
};
console.log(grupos(["Metallica", "Slayer", "Megadeth", "Natos y Waor"]));
function tekken(personaje, atuendo) {
    return `El personaje es ${personaje} y su atuendo es ${atuendo}`;
}
console.log(tekken("tigre", 1));
