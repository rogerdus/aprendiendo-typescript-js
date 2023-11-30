let persona = {
    nombre: "Juan",
    apellido: "Perez",
    domicilio:{
        pais: "Mexico",
        ciudad:
        {
            nombre: "Guadalajara",
            provincia: "Jalisco",
        }
    }
};

//let comprobar_provincia = persona && persona.domicilio && persona.domicilio.ciudad && persona.domicilio.ciudad.provincia;
let comprobar_provincia = persona?.domicilio?.ciudad?.provincia; //encadenamiento de propiedades


console.log(comprobar_provincia);