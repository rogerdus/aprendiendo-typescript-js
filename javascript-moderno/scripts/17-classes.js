//Molde
class Coche{
    ///variable publica se accesa desde cualquier lado 
    // npuertas = 4;

    ///variable privadas solo se accesa desde methodos
    #npuertas = 4;
    // variable protegida
    _nplazas = 5;

    /// Propiedades o atributos
    constructor(
        marca = "Mercedes",
        modelo ="Clase A",
        color = "Negro",
        velocidad = 0,
        year = 2020 )
    {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
        this.year = year;
    }
    /// MEtodos o acciones a las funcionalidades de los objetos
    subirVelocidad(){
        this.velocidad +=1;
    }

    bajarVelocidad(){
        this.velocidad -=1
    }

    /// metodos set y get

    set guardarMarca(marca){
        this.marca;
    }

    get getMarca(){
        return this.marca;
    }

    get numeroPuertas(){
        return this.#npuertas;
    }

    get numeroPlazaz(){
        return this._nplazas;
    }

    //metodo estatico
    
}


//Herencia

class Quad extends Coche{
    constructor(
        marca,
        modelo,
        color,
        velocidad,
        year,
        cilindrada)
    {
        super(
            marca, modelo,color,velocidad,year
        );
        this.cilindros = cilindrada;
    }

    saltar(){
        console.log("Haz saltado una rampa");
    }

}


//let mi_coche = new Coche();
// let mi_coche = new Coche("Audi","R8 Spyder","Rojo",250,2020);

// console.log(mi_coche.marca);
// console.log(mi_coche);
// //console.log(segundo_coche);
// console.log(mi_coche.numeroPuertas);
// console.log(mi_coche.numeroPlazaz);
 
let mi_quad = new Quad("Susuki","A1","Verde",120,2020,4);
mi_quad.subirVelocidad();
mi_quad.subirVelocidad();

mi_quad.guardarMarca = "Peugeot";

console.log(mi_quad);

console.log(mi_quad.marca);
console.log(mi_quad.saltar);
