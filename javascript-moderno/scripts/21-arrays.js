let personas = ["victor","paco","pepe","juan","antonio"];

/// buscar dentro de un array

let busqueda = personas.find(persona => persona === "pepe");

// buscar en un array por index

let busqueda2 = personas.findIndex(persona => persona === "juan");

/// crear array basado en un objeto iterable

let array_letras = Array.from("pedroperezperes");

let array_numeros_cuadrado = Array.from([1,2,3,4,5,6,7], numero => Math.pow(numero,2));


///comprobar si eciste un elemendo dentro del array

console.log(personas.includes("pepe"));

/// filtrar arrays

let nuevas_persona = personas.filter(persona => persona.lenght >= 5);

console.log(nuevas_persona);
console.log(busqueda);
console.log(busqueda2);
console.log(array_numeros_cuadrado);


