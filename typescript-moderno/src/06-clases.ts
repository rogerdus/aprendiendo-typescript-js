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

    constructor(
        public modelo: string,
        public marca: string,
        protected color: string,
        public year: number,
        private arrancado:boolean = false,
        private velocidad:number = 0,
    ){}

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

let mi_coche:Coche = new Coche("Renault","Clio","Rojo",2020);
console.log(mi_coche.marca+mi_coche.modelo);
mi_coche.darColor = "Azul";
console.log(mi_coche.getColor);

console.log(Coche.saludar());
