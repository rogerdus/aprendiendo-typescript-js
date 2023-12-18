
///uso normal 
function saludo(nombre:string):string
{
    return "Hola " + nombre;
}

console.log(saludo("pedro"));

///nada void

function mostrarFecha():void{
    console.log(new Date());
}

mostrarFecha()


//Never fin de la aplicacion
function finApp():never{
    throw new Error("La aplicacion se a cerrado ...");
}

//finApp();


///parametros en funciones


function mostrarPais(pais:string = "Mexico",continente:string ="America" ):string
{
    return "El pais es " + pais + " y su continente es " + continente;
}

console.log(mostrarPais("Colombia"));

//Tipo Funcion

let grupos: (datos:string[]) => string;


grupos = function(datos:string[])
{
    return "Mis grupos favoritos son"+ datos.toString();
}


console.log(grupos(["Metallica","Slayer","Megadeth","Natos y Waor"]));


// Tipo de datos literal
/// atuendo:1|2|3|4

//creando tipo de dato
type traje = "especial"|1|2|3|4|"comprado";

function tekken(personaje:string ,atuendo:traje):string
{
    return `El personaje es ${personaje} y su atuendo es ${atuendo}`;
}

console.log(tekken("tigre",1));

