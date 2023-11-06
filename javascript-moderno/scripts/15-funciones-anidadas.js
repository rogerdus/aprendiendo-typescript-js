let nombre = "Pedro";

function mostrarNombre() {

    let apellidos = "Perez"
    function mostrarApellidos() {

        let profesion = "Desarrollo web";

        function mostrarProfesion() {
            return nombre + " " + apellidos + " profesion: " + profesion;
        }
        return mostrarProfesion;
    }

    return mostrarApellidos;

}
//// con el doble parentesis ejecuta las funciones que tiene dentro
console.log(mostrarNombre()()());