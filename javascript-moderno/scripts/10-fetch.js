window.addEventListener("DOMContentLoaded" , event => {
   
let caja = document.querySelector("#contenedor")
caja.innerHTML = " Cargando...";

// Peticion ajax moderna
fetch('https://jsonplaceholder.typicode.com/posts')
    ///then para convertir la respuesta a objeto json
    .then(response => response.json())
    //// recoleccion de los datos
    .then(items =>{
        caja.innerHTML="";
        console.log(items);
        mostrar(caja,items);
    })
    .catch(error => console.log(error));

///DOM 

function mostrar(contenedor,elementos){

    elementos.forEach(elemento => {
        let muestrame = `
            <article>
                <h2> ${ elemento.title }</h2>
                <p> ${ elemento.body} </p>
            </article>
            <hr/>
        `;
        contenedor.innerHTML += muestrame
    });

    return elementos;
}
});
