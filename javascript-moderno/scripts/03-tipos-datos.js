///string

let nombre = 'Rogelio';

/// number
let numero = 60;
let decimal = 3.2;

// boolean

let mayor_edad = true;

///typeof es para indicar el tipo de dato
console.log(typeof mayor_edad);


//array
let paises = ['Mexico', 'Colombia', 'España','Argentino'];

//Null
let vacio = null;

// Undefined
let no_definido = undefined;

//json Javascript Object Notation

let peliculas = {
    titulo: "space Jam" ,
    genero: "animacion",
    year: 1996,
    director: "pedro",
    mostrar: function(){
        return `
        **** LA PELICULA DE LA SEMANA **** \n
        Titulo: ${this.titulo} 
        Genero: ${this.genero} 
        Año: ${this.year} 
        Director: ${this.director}
        `;
    }
}
//agregar
peliculas.pais = "EUA";
//quitar 
delete peliculas.year
// comprobar si esta la propiedad
let esta = "director" in peliculas;
//recorrer la propiedad
for(let propiedad in peliculas){

    let dato_actual = peliculas[propiedad];
    if(dato_actual !== null && typeof(dato_actual) !== "function") {
        console.log(dato_actual);
    }
}

//symbol
//identificador unico

let animal = Symbol("tigre");
let animal2 = Symbol("tigre");

let user = {
    id: 1,
    nombre: "rogelio",
};

let id = Symbol('id');

user[id] = 7;
console.log(user);