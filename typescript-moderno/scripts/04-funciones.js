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
