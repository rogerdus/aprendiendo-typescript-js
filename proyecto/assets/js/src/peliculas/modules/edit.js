import Storage from './storage.js';
import List from './list.js';

export default function () {
    ///Crear los objetos
    const storage = new Storage();
    const list = new List();
    ///Conseguir datos de peliculas
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll(".peli-item");

    ///Recorrer peliculas mostradas
    pelis_viewed.forEach(peli => {

        ///Seleccionar el boton editar
        let edit_btn = peli.querySelector(".edit");

        ///Asignar un evento a cada boton
        edit_btn.onclick = function () {

            /// Conseguir el id de la pelicula a editar
            const peli_id = parseInt(this.getAttribute("data-id"));

            console.log(peli_id);
            ///Quitar botones para no interferir
            edit_btn.remove();
            peli.querySelector(".delete").remove();

            //Añadir trozo html debajo de los botones
            let peli_edit_html = `
                <div class ="edit-form">
                    <h3 class="title">Editar Pelicula</h3>
                    <form>
                        <input type="text" class="edited_title" value="${peli.querySelector('.title').innerHTML}">
                       <textarea class="edited_description">${peli.querySelector('.description').innerHTML}</textarea>
                        <input type="submit" class="update" value="Actualizar">
                       </form>
                </div>
                `;
            peli.innerHTML += peli_edit_html;

            ///Seleccionar el boton a actualizar
            let update_btn = peli.querySelector(".update");

            ///Aplicar el evento click

            update_btn.onclick = function (e) {
                e.preventDefault();

                /// Buscar el indice de la pelicula a actualizar
                let index = pelis_stored.findIndex(peli => peli.id === peli_id);

                //Guardar objeto dentro de ese indice
                pelis_stored[index] = {
                    id: peli_id,
                    title: peli.querySelector(".edited_title").value,
                    description: peli.querySelector(".edited_description").value,
                };
                
                //Actualizar localstorage
                storage.save(pelis_stored);

                //Volver a mostrar el listado
                list.show(pelis_stored);
                return false;
            }

        }


    });

}