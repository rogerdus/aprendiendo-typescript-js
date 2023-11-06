///string clasicos
let nombre = 'Rogelio'
let apellidos = 'Interino'

//template string

let plantilla = `hola soy ${nombre} ${apellidos}`;

function ficha(nombre, apellidos) {
    let fichaTecnica = `
    <div class= "ficha">
        <h2> ${nombre} ${apellidos}</h2>
        <p> bienvenido </p>
    </div>`;
    return fichaTecnica;
}



let cajaFichas = document.createElement("section");
cajaFichas.innerHTML = ficha('Rogelio', 'interino');



document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(cajaFichas);
}, false);

console.log(plantilla);
