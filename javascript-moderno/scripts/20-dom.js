

/// seleccionar elementos con Id 

///forma clasica
let contenedor = document.getElementById("contenedor");

console.log(contenedor);

contenedor.innerText = "Hola soy un texto desde JS";
contenedor.style.border = "1px solid black";
contenedor.style.backgroundColor = "gray";


///forma nueva

let contenedores = document.querySelectorAll("#contenedor1");

contenedores.forEach((elemento, indice) => {
    elemento.innerText = `Hola soy un texto ${indice} desde js `
    elemento.className = "ficha"

    if(indice === 2 ){
        elemento.style.backgroundColor = "orange";
    }
})


//Seleccionar elementos con clase