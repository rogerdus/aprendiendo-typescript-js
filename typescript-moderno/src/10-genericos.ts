function mostrarMensaje<T>(parameter:any){
    return parameter;
}

console.log(mostrarMensaje("Hola que tal".replace("Hola","Saludos")));
console.log(mostrarMensaje(25).toFixed(2));
console.log(mostrarMensaje(true));