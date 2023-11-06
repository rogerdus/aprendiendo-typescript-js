/// funcion con parametros con defecto
function saludo(persona = "Sin nombre"){
    return "Hola " + persona;
}

console.log(saludo("pedro"));

// funciones de flecha

let saludo2 = function(nombre){
    return "hola"+ nombre;
}

console.log(saludo2("pablo"));

let saludo3 = nombre => "hola" + nombre;

console.log(saludo3("juan"));

let saludo4 = (nombre,pais) => "hoka mando un saludo "+nombre+" desde: "+pais;

console.log(saludo4("pepe","Mexico"));

function multiplicacion(n1,n2){
    console.log(n1*n2);
}


let multiplicacion1 = (n1,n2) => console.log(n1*n2);

multiplicacion1(23,43);


///json funcion de flecha

let tienda = {
    nombre: "GAME",
    videojuegos: ["GTA","WWE","FIFA"],
    mostrar: function(){
        console.log(this.nombre);
    },
    mostrar2(){
        this.videojuegos.forEach(juego => {
            
            console.log(juego);

        })
    },
    mostrar3: () =>{
        console.log(tienda.nombre);
    }
}