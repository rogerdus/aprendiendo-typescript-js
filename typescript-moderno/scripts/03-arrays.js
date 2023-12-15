"use strict";
let personas = ["Pedro", "Juan", "Maria",];
personas.push("Carlos");
///array de numeros
let years = new Array(1990, 1995, 2000);
years.push(2024);
console.log(personas, years);
//Tuplas
// son array con elementos definidos anteriormente
let pelicula = ["Batman Begins", true, 1990];
pelicula.push("hola");
console.log(typeof (pelicula));
/// enum - enumeracion de datos
/// conjunto de valores que se pueden asignar a una variable
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Rogelio";
    DatosPersonales[DatosPersonales["dni"] = 232323] = "dni";
    DatosPersonales["direccion"] = "DWEdewdewdwd";
    DatosPersonales["ciudad"] = "Bogota";
})(DatosPersonales || (DatosPersonales = {}));
console.log(DatosPersonales.nombre, DatosPersonales.dni);
/// Cast Convertit a otro tipo de dato
let texto_desconocido = "Hola, viene de fuera por ajax";
let texto_convertido = texto_desconocido;
console.log(texto_convertido);
