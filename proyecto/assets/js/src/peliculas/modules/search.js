import Storage from './storage.js';
import List from './list.js';

export default function () {
    // Crear objetos
    const storage = new Storage();
    const list = new List();

    //Conseguir elementos del DOM
    let content = document.getElementById('#content');
    let search_btn = document.querySelector("#search");
    //Aplicar evento al formulario busqueda

    search_btn.onclick = (e) => {
        e.preventDefault();

        ///Conseguir el valor del input
        let wanted = document.querySelector("#search_field").value;

        ///Conseguir datos actualizados de peliculas
        let pelis_stored = storage.getData();

        ///Aplicar filtro de busqueda
        const new_pelis = pelis_stored.filter(peli => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase());
        });

        ///Mostrar el listado de coincidencias
        if (new_pelis.length <= 0) {
            content.innerHTML = "<div><h2>No se encontraron resultados</h2></div>";
        } else {

            list.show(new_pelis);
        }

        return false;
    }
}