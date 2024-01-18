/// Comprobar si esta disponible 

if(navigator.geolocation){
    console.log("Si esta disponible");

    ///Consegui posicion

    navigator.geolocation.getCurrentPosition(
        position => {
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;
            
            console.log(position);
        },
        error => {
            console.log("hay un error"+ error);
        }
    );
}