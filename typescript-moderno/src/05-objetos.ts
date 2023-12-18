type empresas = {
    nombre: string,
    sector: string,
    servicios: string[],
    facturacion: number,
    mostrar: () => string,
};
let empresa:empresas =
{
    nombre: "BUGATTI",
    sector: "INFORMATICA",
    servicios: ["servicio1", "servicio2", "servicio3","consolas"],
    facturacion: 55_000_000_000,
    mostrar(){
        return this.nombre + " " + this.sector + " " + this.servicios + " " + this.facturacion; 
    }
}
console.log(empresa.mostrar());