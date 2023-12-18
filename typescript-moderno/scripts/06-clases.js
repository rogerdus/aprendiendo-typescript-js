"use strict";
class Coche {
    //// FORMA ANTERIOR
    // modelo: string;
    // marca: string;
    // color: string;
    // year: number;
    // arrancado:boolean;
    // velocidad:number;
    // constructor(modelo:string,marca:string,color:string,year:number){
    //     this.modelo = modelo;
    //     this.marca = marca;
    //     this.color = color;
    //     this.year = year;
    //     this.arrancado = false;
    //     this.velocidad = 0;
    // }
    /// FORMA NUEVA
    //public: accesible desde cualquier lugar
    //private: accesible solo desde la clase
    //protected: accesible desde la clase y las clases hijas
    constructor(modelo, marca, color, year, arrancado = false, velocidad = 0) {
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.year = year;
        this.arrancado = arrancado;
        this.velocidad = velocidad;
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
let mi_coche = new Coche("Renault", "Clio", "Rojo", 2020);
console.log(mi_coche.marca + mi_coche.modelo);
mi_coche.darColor = "Azul";
console.log(mi_coche.getColor);
console.log(Coche.saludar());
