let personas:string[] = ["Pedro","Juan","Maria",];

personas.push("Carlos");

///array de numeros
let years:number[] = new Array (1990,1995,2000);

years.push(2024);
console.log(personas,years);

//Tuplas

// son array con elementos definidos anteriormente
let pelicula:[string,boolean,number] = ["Batman Begins", true, 1990];

pelicula.push("hola");
console.log(typeof(pelicula));

/// enum - enumeracion de datos
/// conjunto de valores que se pueden asignar a una variable
enum DatosPersonales{
    nombre ="Rogelio",
    dni = 232323,
    direccion ="DWEdewdewdwd",
    ciudad = "Bogota",
}

console.log(DatosPersonales.nombre,DatosPersonales.dni);

/// Cast Convertit a otro tipo de dato

 let texto_desconocido:any = "Hola, viene de fuera por ajax";
 let texto_convertido:string = <string> texto_desconocido;

 console.log(texto_convertido);