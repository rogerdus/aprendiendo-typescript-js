import Add from './modules/add.js';

export default class App{
    constructor(){
        //inicializar propiedades
        this.add = new Add();
    }

    load(){
        ///Añadir pelicula
        this.add.save();
        //Listar Peliculas

        //buscar Peliculas

        console.log("La aplicacion a sido inicializada");
    }
}