
const antiguos_gadgets = {
    seis: "RADIO",
    siete: "TELEFONO MESA",
    ocho: "COMPACT DISC"
  }
  
  const gadgets = new Map(Object.entries(antiguos_gadgets));
  
  gadgets.set(1,"PC")
      .set(2,"TV")
      .set(3,"PANTALLA")
      .set(4,"TABLET")
      .set(3,"LAPTOP")
      .set("cinco","PC")
      .set("seis","PC")
  
  console.log(gadgets.get("cinco"))
  
  /// comprobar si existen elementos
  console.log(gadgets.has(4));
  