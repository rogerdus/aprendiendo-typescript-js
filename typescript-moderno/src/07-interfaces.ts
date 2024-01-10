interface Videojuego{
    titulo:string;
    categoria:string;
    edad:number;
    duracion?:number;
    lanzado?:boolean;

    mostrar():void
    actualizar(consola:string):string;
};

class Fifa implements Videojuego{
    constructor( 
        public titulo:string,
        public categoria:string,
        public edad:number,
        public duracion?:number,
        public lanzado?:boolean,
    ){}
    mostrar():void{
        console.log(this.titulo,this.categoria,this.edad);
    }
    actualizar(consola:string):string{
        console.log("buscando actualizaciones");
        return "Actualizado"
    }
}

/// Interfaz objeto literal
let gta:Videojuego = {
    titulo: "GTA V",
    categoria: "Accion",
    edad:18,
    duracion:200,
    lanzado:true,
    mostrar(){
        console.log(this.titulo,this.categoria,this.edad);
    },
    actualizar(consola:string){
        console.log("buscando actualizaciones");
        return "Actualizado"
    }
};


let fifa23 = new Fifa("Fifa 23","Deportes",5,25,true);

console.log(fifa23.mostrar());
//console.log(gta);