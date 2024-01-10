"use strict";
class Coche {
    constructor(modelo, marca, color, year, arrancado = false, velocidad = 0) {
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.year = year;
        this.arrancado = arrancado;
        this.velocidad = velocidad;
        this.prueba = "prueba";
    }
    arrancar() {
        this.arrancado = true;
    }
    apagar() {
        this.arrancado = false;
    }
    mostrarTodo() {
        return this.mostrarCoche() + " " + this.mostrarCualidades();
    }
    acelerar() {
        this.velocidad += 5;
    }
    mostrarCoche() {
        return this.marca + " " + this.modelo;
    }
    mostrarCualidades() {
        return this.year + "" + this.color;
    }
    //// metodos get y set 
    set darColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    ///metodos statico
    static saludar() {
        return "Hola Mundo";
    }
}
class Camioneta extends Coche {
    constructor(modelo, marca, color, year) {
        /// con super se accede a los valores de la clase Coche
        super(marca, modelo, year, color);
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.year = year;
    }
    arrancar() {
        console.log("clase hija");
        this.velocidad = 200;
        this.arrancado = true;
        console.log(this);
    }
    mostrar() {
        /// asi se accede a un metodo dentro de una clase hija
        //this.arrancar();
        /// asi se accede a un metodo heredado
        super.arrancar;
        return this.arrancado;
    }
}
let micamioneta = new Camioneta("Jeep", "Nose", 1990, "negro");
console.log(micamioneta);
console.log(micamioneta.mostrar());
/*
let mi_coche:Coche = new Coche("Renault","Clio","Rojo",2020);
console.log(mi_coche.marca+mi_coche.modelo);
mi_coche.darColor = "Azul";
console.log(mi_coche.getColor);

console.log(Coche.saludar());
*/ 
