// Comprobar si el navegador es compatible
//console.log(typeof(Storage));


if (typeof (Storage) !== "undefined") {
    console.log("El navegador es compatible");
} else {
    console.log("Localstorage no disponible");
}
let nombre = "Juan"
sessionStorage.setItem("nombre", nombre);
sessionStorage.setItem("sitioweb", "juanaguacate.com");
localStorage.setItem("nombre", nombre);

//sacar Datos
alert(sessionStorage.getItem("nombre"));