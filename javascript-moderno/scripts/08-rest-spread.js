///SPREAD
let heroes = ["Batman", "Spiderman", "Superman","Venom","Aquaman"];

console.log(...heroes);

function mostrarHeroes(heroe1, heroe2){
    console.log(`
    ****MIS SUPERERIES FAV *******
        - ${heroe1}
        - ${heroe2}
        fin.
    `);
}

mostrarHeroes(...heroes);

let superheroes = ["Flash", "Catwoman", ...heroes];

console.log(superheroes);


///REST
function peliculas(pelicula1, pelicula2, ...restoPeliculas){
    console.log(pelicula1);
    console.log(pelicula2);
}

peliculas(
    "Sr de los anillos",
    "F and F",
    "Gran torino",
    "Interestelar"
    );
