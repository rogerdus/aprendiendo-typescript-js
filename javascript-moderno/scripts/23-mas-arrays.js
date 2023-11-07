let personas = ["victor","paco","pepe","juan","antonio"];

let paises = [
    {
        nombre: "Mexico",
        continente: "America",
    },
    {
        nombre: "Espana",
        continente: "Europa",
    },
    {
        nombre: "Japon",
        continente: "Asia",
    },
];

/// some 
let existeAlguno = personas.some(nombre => nombre === "victor");

console.log(existeAlguno);
/// every

let esIgualTodos = paises.every(pais => pais.continente === "Asia");

console.log(esIgualTodos);

/// Map

let nuevas_personas = personas.map(persona => persona);

console.log(nuevas_personas);

// Reduce

console.log(personas.reduce((acumulador,actual) => {
    return acumulador+actual;
}));
