let frutas =[
    "manzana",
    "pera",
    "naranja",
    "sandia"
];

//-----------manera clasica
//let manzana = frutas[0];
//let pera = frutas[0];

// desestructurar array

let [manzana,pera,naranja,sandia] = frutas;

///desestructurar objetos

let persona = {
    nombre: "pedro",
    edad: 79,
    altura: 170,
    pais: "Mexico"
};

//let {nombre,edad,altura,pais} = persona;

// desestructurar string

let info = "Rogelio 993999999 09/09/1200 Mexico";

let [nombre,apellido1, apellido2,dni,fecha,ciudad ] =info.split(" ");

//utilidad parametros funciones


function mostrarUsuario({nombre,apellidos,ciudad = "Toluca"}){
    console.log(nombre, apellidos,ciudad);
}

mostrarUsuario({nombre: "Rogelio", ciudad: "Lerma"});



