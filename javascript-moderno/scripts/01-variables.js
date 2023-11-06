/// ECMASCRIPT 2021 / ES12 / ES.NEXT
//variables con var
// var = de manera global o funcional
function mostrarNombre(){
    var nombre = 'Pedro';
    //console.log(nombre);
}

// let = ambito de bloque solo se usa en el bloque donde se usa
let pais = 'Mexico';

if(pais == 'Mexico'){
    let continente = 'America';
    //console.log(continente);
}

/// No accesible desde fuera del bloque
//console.log('fuera: ', continente);

for(let contador = 0; contador <= 5; contador++){
    //console.log(contador);
}
/// No accesible desde fuera del bloque
//console.log(contador);

// const = Crear constantes o variables que su contenido
// no es variable

let edad = 18;
const ciudad = 'Toluca'
const fechaNacimiento = 1994;

console.log(ciudad,fechaNacimiento);
