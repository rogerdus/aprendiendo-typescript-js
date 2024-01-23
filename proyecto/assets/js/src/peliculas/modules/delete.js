import Storage from "./storage.js";
import List from "./list.js";


export default function(){
    /// Crear los objetos

    const storage = new Storage();
    const list = new List();

    // Peliculas Disponibles
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll("#content .peli-item");

    ///Recorrer peliculas mostradas

    pelis_viewed.forEach(peli => {
        
        //let selector = "#"+peli.id+" .delete";

        ///Capturar el boton
        let delete_button = peli.querySelector(".delete");

        ////Aplicarle el evento click
        delete_button.onclick = function()  {

            ///Conseguir el id de la pelicula a borrar
            const peli_id = this.getAttribute("data-id");

            ////Filtrar el array de peliculas para eliminar la pelicula seleccionada
            const new_pelis_stored = pelis_stored.filter((peli) => peli.id !== parseInt(peli_id));
            
            //Actualizar datos en localstorage
            storage.save(new_pelis_stored);
            //Mostrar el listado de peliculas
            list.show(new_pelis_stored);
        }

    });

}