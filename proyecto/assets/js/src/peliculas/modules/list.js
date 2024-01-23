import DeleteList from './delete.js';
import EditList from './edit.js';

export default class List {
    constructor() {
        ///Seleccionar elementos del dom a usar
        this.content_field = document.querySelector('#content');
    }


    ///Plantilla de pelicula a agregar
    peli_template (peli){

        return `<article class="peli-item" id="peli-${peli.id}">
        <h3 class="title">${peli.title}</h3>
        <p class="description">${peli.description}</p>
        <button class="edit" data-id="${peli.id}">Editar</button>
        <button class="delete" data-id="${peli.id}">Borrar</button>
      </article>` ;
    }

    show(pelis){
        //Vaciar dom del contenedor principal
        this.content_field.innerHTML = '';

        //Recorrer peliculas y mostrarlas en el dom
        pelis.forEach(peli => {
            this.content_field.innerHTML += this.peli_template(peli);
        });

        ///funcionalidad de editar y borrar
        /// funcionalidad borrar
        DeleteList();
        /// funcionalidad editar
        EditList();

    }


}