//operador ternario

let persona = ["Rogelio",34];

//clasica
if(persona[1] >= 18){
    console.log("es mayor");
}else{
    console.log("es menor");
}

///operador ternario
let edad = (persona[1] >= 18) ? "es mayor" : "es menor";

console.log(edad);



//// Diferencia entre == y === y != y !==

let edad1 = 80;
let edad2 = "80";

// === evalua tambien el tipo de dato
if(edad1 == edad2){
    console.log("edades iguales");
}else{
    console.log("edades distintas");
}

