function mostrarMensaje(){
    console.log("Proyectando la pelicula");
}

function proyectar(metadatos:any){

    return (constructor:Function) => {
        constructor.prototype.hacerProyeccion = function():void{
            if(metadatos.activar){
                console.log("Proyectando la pelicula: ", this.titulo);
            }else{
                console.log("Cine Cerrado");
            }
        }

        constructor.prototype.agregarASeleccion = function():string[]{
          let peliculas = metadatos.seleccion;
          peliculas.push(this.titulo);
          return peliculas;
        }
    };
}

@proyectar({
    activar:true,
    seleccion:["Superman","Gran Torino","Spiderman"]
})
class Pelicula{
    constructor(
        public titulo:string,
        public genero:string,
        public proyectando:boolean,
    ){

    }
}

let batman:any = new Pelicula("Batman","Accion",false);
(<any>batman).hacerProyeccion(true);
console.log(batman.agregarASeleccion());