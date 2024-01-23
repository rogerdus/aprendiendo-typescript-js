import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';
import Search from './modules/search.js';

export default class App{
    constructor(){
        //inicializar propiedades
        this.add = new Add();
        this.storage = new Storage();
        this.list = new List();
        this.search = new Search();
    }

    load(){
        ///Añadir pelicula
        this.add.save();
        /// conseguir el localstorage
        const pelis = this.storage.getData();
        //Listar Peliculas
        this.list.show(pelis);
        //buscar Peliculas
        Search();
        console.log("La aplicacion a sido inicializada");
    }
}