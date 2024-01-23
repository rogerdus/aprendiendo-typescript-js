import Storage from './storage.js';
import List from './list.js';

export default function(){
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
        console.log(new_pelis);


        ///Mostrar el listado de coincidencias

        return false;
    }
}