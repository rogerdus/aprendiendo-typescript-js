import Storage from "./storage.js";
import List from "./list.js";

export default class Add {

    constructor() {
        ///Crear objetos
        this.storage = new Storage();
        this.list = new List();

        /// Conseguir elementos del dom a utilizar
        this.title_field = document.querySelector('#title');
        this.description_field = document.querySelector('#description');
        this.save_btn = document.querySelector('#save');
    }

    save() {

        this.save_btn.onclick = (e) => {
            e.preventDefault();

            /// Conseguir datos actualizados
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();

            let title = this.title_field.value;
            let description = this.description_field.value;

            //pequeña validacion

            if (title != '' || description != '') {
                /// Crear objeto a guardar
                let peli = {
                    id: lastId++,
                    title,
                    description
                }

                ///Añadir al array de objetos
                pelis.push(peli);

                ///Guardar en localstorage
                this.storage.save(pelis);
                
                //Actualizar el listado de peliculas
                this.list.show(pelis);

            } else {
                alert("Introduce bien los datos en el formulario");
            }

            // alert("click en el form"+ title + description);
            return false;
        }
    }
}