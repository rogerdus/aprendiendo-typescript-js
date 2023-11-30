// separadores numericos
let numero = 4_000_000;
console.log(typeof numero, numero);

//replace y replaceAll
let frase = "Voy en mi moto contento por la carretera y veo otra moto"
console.log(frase);
//let nueva_frase = frase.replace("moto", "bicicleta"); //antes, solo reemplazaba la primera
let  nueva_frase = frase.replaceAll("moto", "coche"); //ahora
console.log(nueva_frase);

//asignadores logicos

let nombre ;
let id = 25;

nombre ||= id;

console.log(nombre);

let nombre1 = "Juan";

nombre1 &&= id;
console.log(nombre1);