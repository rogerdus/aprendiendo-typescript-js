let productos = [
    {
        nombre: "Ordenador Gaming",
        marca: "Asus",
        precio: 1200
    },
    {
        nombre: "Tablet",
        marca: "Samsung",
        precio: 300
    },
    {
        nombre: "Camara",
        marca: "Canon",
        precio: 234
    },
    {
        nombre: "Monitor",
        marca: "LG",
        precio: 235
    }
];

function conseguirProductos() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(productos);
        }, 3500);

    });
}

function conseguirNombre() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Pedro Perez");
        }, 3000);

    });
}


async function getMisProductos(){
    try{
        console.log("Cargando Informaciòn");
        ///ejecuta los promise de una vez
        let informacion = await Promise.all([conseguirProductos(),
            conseguirNombre()]);

        console.log(informacion[0],informacion[1]);

    }catch(error){
        console.log(error);
    }
}


getMisProductos();

