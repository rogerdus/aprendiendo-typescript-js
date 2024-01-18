// Comprobar si el navegador es compatible
//console.log(typeof(Storage));


if (typeof (Storage) !== "undefined") {
    console.log("El navegador es compatible");
} else {
    console.log("Localstorage no disponible");
}

///Guardar datos en el navegador
localStorage.setItem("nombre", "Juan");
localStorage.setItem("nombre1", "dwwdiohwioe");
localStorage.setItem("nombre2", "ferfefefefef");
localStorage.setItem("nombre3", "fjoerjfoej");


//Recuperar datos del navegador
let nombre = localStorage.getItem("nombre");

let datos = document.querySelector("#datos");

datos.innerHTML = `<p id="nombre1">Nombre 1:  ${localStorage.getItem("nombre1")} <button>Borrar</button> <br/></p>`;
datos.innerHTML += `<p id="nombre2"> Nombre 2: ${localStorage.getItem("nombre2")} <button>Borrar</button></p>`;
datos.innerHTML += `<p id="nombre3"> Nombre 3: ${localStorage.getItem("nombre3")} <button>Borrar</button></p>`;

//Borrar datos del navegador
localStorage.removeItem("nombre");

var elementos = document.querySelectorAll("p button")

elementos.forEach(elemento => {
    elemento.addEventListener("click", (event) => {
        let padre = event.target.parentElement;
        localStorage.removeItem(padre.id); //elimina el id del padre del boton
        event.target.parentElement.remove(); //elimina el padre del boton

    });

});

// document.querySelector("#nombre2 button").addEventListener("click", () => {
//     localStorage.removeItem("nombre2");
//     document.querySelector("#nombre2").remove(); //elimina  seleccionando el parrafo
// });

document.querySelector("#all").addEventListener("click", () => {
    localStorage.clear();
    elementos.forEach(elemento => elemento.parentElement.remove());
});

//sacar objeto del localstorage
let persona = JSON.parse(localStorage.getItem("persona"));
console.log(persona);

datos.innerHTML += persona.sitio;
