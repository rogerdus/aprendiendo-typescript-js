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
        console.log("Cargando....");

        setTimeout(() => {
            resolve(productos);
        }, 3500);

    });
}

// conseguirProductos().then((items) => {
//     console.log(items);
// });

function productoComprado(nombre) {
    return new Promise((resolve, reject) => {
        console.log("Haciendo las compras");
        setTimeout(() => {
            resolve({
                producto: nombre,
                cliente: "pedro perez"
            })
        }, 1000);
    });
}


function procesarVenta(venta){
    console.log("producto comprado",venta);

    productos = productos.filter( producto => {

        return producto.nombre != venta.producto

    })
    return productos;
}


//// parte 2

// function conseguirProductos() {

//     return new Promise((resolve, reject) => {
//         console.log("Cargando....");

//         setTimeout(() => {
//             resolve(productos);
//             reject("Ocurrio un error");
//         }, 3500);

//     });
// }

// conseguirProductos()
//     .then(items => {
//         console.log("productos disponibles: ", items);
//         return productoComprado("Ordenador Gaming");
//     })
//     .then(venta => {
//         procesarVenta(venta);
//         return productoComprado("Tablet");
//     })
//     .then(venta => {
//         procesarVenta(venta);
//     })
//     .catch(error => console.log(error))
//     .finally((items) =>{
//         if(productos.length >= 1){
//             console.log("productos que quedan ",productos);
//         }
//         else{
//             "No quedan productos";
//         }
//         console.log("Promesa finalizada");
        
//     });

    ///// procesa todas las promesas pero no se puede detener
    Promise.all([
        conseguirProductos(),
        productoComprado("Ordenador Gaming")
        ,productoComprado("Tablet")

    ])
    .then( venta => {
        console.log(venta);
    })