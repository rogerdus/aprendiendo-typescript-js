////crear set 
let gadgets = new Set(["movil","tablet","portatil"]);

console.log(gadgets);
/// agregar elementos al set
gadgets.add("smartwatch");
gadgets.add("teclado");
gadgets.add("mouse");
gadgets.add("tv");

// sacar el tamaño del set
console.log(gadgets.size);

//// recorrer set 
for(let item of gadgets){
    console.log(item);
}

//eliminar del ser
gadgets.delete("tv")

///comprobar existencia

//gadgets.has("pantalla")

////recorrer con foreach 
gadgets.forEach(item => {
    console.log(item);
});

///comprobar existencia
console.log(gadgets.has("tv"));
console.log(gadgets.has("teclado"));