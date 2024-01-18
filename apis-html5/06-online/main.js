
let conectado = document.querySelector(".online")
let desconectado = document.querySelector(".offline")

function ocultarDivs() {
    conectado.style.display = "none"
    desconectado.style.display = "none"
}

ocultarDivs();

alert(navigator.onLine)

window.addEventListener('online', () => {
    //alert("Estas conectado a internet")
    conectado.style.display = "block"
    desconectado.style.display = "none"

    setTimeout(() => {
        ocultarDivs()  
    }, 10000);
});

window.addEventListener('offline', () => {
    //alert("Estas desconectado a internet")
    desconectado.style.display = "block"
    conectado.style.display = "none"

    setTimeout(() => {
        ocultarDivs()  
    }, 10000);
});

setTimeout(() => {
    ocultarDivs()  
}, 10000);