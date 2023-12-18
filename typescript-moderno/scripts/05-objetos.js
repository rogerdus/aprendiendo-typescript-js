"use strict";
let empresa = {
    nombre: "BUGATTI",
    sector: "INFORMATICA",
    servicios: ["servicio1", "servicio2", "servicio3", "consolas"],
    facturacion: 55000000000,
    mostrar() {
        return this.nombre + " " + this.sector + " " + this.servicios + " " + this.facturacion;
    }
};
console.log(empresa.mostrar());
