export function imprimirArray(datos) {
    datos.forEach(element => {
        console.log(element);
    });
    
    return datos;
}

export function saludo(nombre){
    console.log(nombre);
    return nombre;
}


// export default {
//         imprimirArray,
//         saludo
// }