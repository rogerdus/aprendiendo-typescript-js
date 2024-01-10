"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function mostrarMensaje() {
    console.log("Proyectando la pelicula");
}
function proyectar(metadatos) {
    return (constructor) => {
        constructor.prototype.hacerProyeccion = function () {
            if (metadatos.activar) {
                console.log("Proyectando la pelicula: ", this.titulo);
            }
            else {
                console.log("Cine Cerrado");
            }
        };
        constructor.prototype.agregarASeleccion = function () {
            let peliculas = metadatos.seleccion;
            peliculas.push(this.titulo);
            return peliculas;
        };
    };
}
let Pelicula = class Pelicula {
    constructor(titulo, genero, proyectando) {
        this.titulo = titulo;
        this.genero = genero;
        this.proyectando = proyectando;
    }
};
Pelicula = __decorate([
    proyectar({
        activar: true,
        seleccion: ["Superman", "Gran Torino", "Spiderman"]
    }),
    __metadata("design:paramtypes", [String, String, Boolean])
], Pelicula);
let batman = new Pelicula("Batman", "Accion", false);
batman.hacerProyeccion(true);
console.log(batman.agregarASeleccion());
