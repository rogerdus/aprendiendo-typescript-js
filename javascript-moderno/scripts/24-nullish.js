/// Nullish cialescing operator

function multiplicacion (numero1, numero2 ){
    // numero1 = (numero1 == null ? 1: numero1);
    // numero2 = (numero2 == null ? 1: numero2);

    ///nueva funcion 
    numero1 = numero1 ?? 1;
    numero2 = numero2 ?? 1;

    return numero1 * numero2;
}

function mostrarUsuario(id,nombre){
    let mi_usaurio = (id+" "+nombre);
    
    return mi_usaurio;
}

console.log(multiplicacion(5,2));

console.log(mostrarUsuario(2,""));