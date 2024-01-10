abstract class Coche {
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

    public prueba: string;

    constructor(
        public modelo: string,
        public marca: string,
        protected color: string,
        public year: number,
        protected arrancado:boolean = false,
        protected velocidad:number = 0,
    ){
        this.prueba = "prueba";
    }

    public arrancar():void{
        this.arrancado = true;
    }

    public apagar():void{
        this.arrancado = false;
    }

    public mostrarTodo():string{
        return this.mostrarCoche()+ " "+this.mostrarCualidades();
    }

    public acelerar():void{
         this.velocidad += 5;
    }

    private mostrarCoche():string{
        return this.marca +" "+this.modelo;
    }

    private mostrarCualidades():string{
        return this.year+""+ this.color;
    }

    //// metodos get y set 
    public set darColor(color:string){
        this.color = color;
    }

    public get getColor():string{
        return this.color;
    }

    ///metodos statico

    static saludar():string{
        return "Hola Mundo";
    }

}

class Camioneta extends Coche{
    constructor(
        public modelo: string,
        public marca: string,
        protected color: string,
        public year: number,
    ){
        /// con super se accede a los valores de la clase Coche
        super(marca,modelo,year,color);
    }

    public arrancar():void {
        console.log("clase hija");
        this.velocidad = 200;
        this.arrancado = true;
        console.log(this);
    }

    public mostrar(){
        /// asi se accede a un metodo dentro de una clase hija
        //this.arrancar();
        /// asi se accede a un metodo heredado
        super.arrancar
        return this.arrancado;
    }
}

let micamioneta = new Camioneta("Jeep","Nose",1990,"negro");
console.log(micamioneta);

console.log(micamioneta.mostrar());

/*
let mi_coche:Coche = new Coche("Renault","Clio","Rojo",2020);
console.log(mi_coche.marca+mi_coche.modelo);
mi_coche.darColor = "Azul";
console.log(mi_coche.getColor);

console.log(Coche.saludar());
*/