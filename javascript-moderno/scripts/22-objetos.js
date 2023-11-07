let titulo = "El señor de los anillos";
let genero = "Accion";
let duracion = "2 horas";

const pelicula = {
    titulo,
    genero,
    duracion,
    [genero+"2023"]: "hola",
    mostrar (){
        return this.titulo+" "+this.genero
    },
}

console.log(pelicula);

Object.entries(pelicula).forEach(([clave,valor]) => console.log(clave,valor));

