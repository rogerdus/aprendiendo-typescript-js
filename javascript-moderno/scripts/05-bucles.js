let nombres = [
    'Rogelio',
    'paco',
    'pedro',
    'juan'
];

//// for of

for(let nombre of nombres){
    console.log(nombre);
}

//for in 

for(let indice in nombres){
    console.log(indice, nombres[indice]);
}

///foreach
nombres.forEach(function(nombre_actual,indice, arreglo){
    console.log(indice, nombre_actual,arreglo);
});


///foreach funcion de flecha
nombres.forEach((nombre_actual,indice, arreglo) => console.log(indice, nombre_actual,arreglo));

/// Iterables

const mi_iterable = nombres[Symbol.iterator]();

//Recorrer string

let sitioweb = "pruebasautimat.com";

//console.log(mi_iterable,typeof(mi_iterable));

console.log(mi_iterable.next());

let fruta = {
    nombre : "Manzana",
    color: "Verde",
    temporada: "Invierno",
};

fruta[Symbol.iterator] = function(){
    let indice = 0;
    let valores = Object.values(this);

    return {
        next(){
            let valor  = valores[indice];
            if(indice >= valores.length){
                return{
                    done: true,
                    value: undefined
                };
            }

            return{
                done: false,
                value: valores,
                indice: indice++
            };
        }
    };
}

for(let propiedad of fruta){
    console.log(propiedad);
}

