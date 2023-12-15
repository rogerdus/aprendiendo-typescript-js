
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


function mostrarPais(pais:string = "Mexico",continente?:string = "America"):string
{
    return "El pais es " + pais + " y su continente es " + continente;
}

console.log(mostrarPais("Colombia"));