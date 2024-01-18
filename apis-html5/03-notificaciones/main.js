///Notificaciones 
//Comprobar si el navegador soporta notificaciones

if (Notification == "undefined") {
    console.log("No es compatible");
}else{
    console.log("Eres compatible"+Notification);

    // Solicitar permisos
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }

    console.log(Notification.permission);
    //Crear una notificacion
    let principal = "Hola soy una notificacion";
    let opciones = {
        body: "Cuerpo de la notificacion",
        icon: "https://assets.materialup.com/uploads/f25ba9a6-5556-42ee-8ac5-5936e2d8ea8a/preview",
    }
    const notificacion = new Notification(principal,opciones);

    // Tiempo de expiracion de la notificacion

    notificacion.onclick = (event) => {
        event.preventDefault();
        //window.open("https://www.supervivencialinux.com/");
        window.location.href = "https://www.supervivencialinux.com/";
    }
    notificacion.onclose = () => {
        alert("Que pena");
    }

    setTimeout(() => {
        notificacion.close();
    },5000);
}