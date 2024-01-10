"use strict";
;
class Fifa {
    constructor(titulo, categoria, edad, duracion, lanzado) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duracion = duracion;
        this.lanzado = lanzado;
    }
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    }
    actualizar(consola) {
        console.log("buscando actualizaciones");
        return "Actualizado";
    }
}
/// Interfaz objeto literal
let gta = {
    titulo: "GTA V",
    categoria: "Accion",
    edad: 18,
    duracion: 200,
    lanzado: true,
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    },
    actualizar(consola) {
        console.log("buscando actualizaciones");
        return "Actualizado";
    }
};
let fifa23 = new Fifa("Fifa 23", "Deportes", 5, 25, true);
console.log(fifa23.mostrar());
//console.log(gta);
