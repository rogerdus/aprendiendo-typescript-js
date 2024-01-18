let lista = document.querySelectorAll("#lista li")

lista.forEach(elemento => {
    let continente =  elemento.dataset.continente;
    elemento.innerHTML += " | " + continente;
    
    if(continente === "America"){
        elemento.style.backgroundColor = "pink";
        elemento.style.color = "black";
    }
    
})