const hortalizas = document.querySelectorAll("#cesta > div");
const huerto = document.querySelector("#huerto");
const cesta = document.querySelector("#cesta");

/// DRAGSTART // DRAG // DRAGEND
hortalizas.forEach((hortaliza,indice) => {
    hortaliza.setAttribute("id","tomate"+indice);

    //DRAG
    hortaliza.addEventListener("dragstart", (e) => {
        console.log("estas moviendo el tomate: " + parseInt(indice + 1));
        // compartir info del elemento que muevo
        e.dataTransfer.setData("text", e.target.id);
    });
});

//DRAGENTER // DRAGOVER // DRAGLEAVE // DROP
huerto.addEventListener("dragover", (e) => {
    e.preventDefault();
});

huerto.addEventListener("drop", (e) => {
    e.preventDefault();

    //Recibir informacion y soltar elemento en la zona
    let hortaliza = e.dataTransfer.getData("text");
    e.target.appendChild(document.querySelector("#"+hortaliza));
});

// huerto.addEventListener("dragleave", (e) => {
//     e.preventDefault();
//     //huerto.classList.add("hover");
//     console.log("tomate recogido");
// });


cesta.addEventListener("dragover", (e) => {
    e.preventDefault();

});

cesta.addEventListener("drop", (e) => {
    e.preventDefault();

    let hortaliza = e.dataTransfer.getData("text");
    e.target.appendChild(document.querySelector("#"+hortaliza));
    console.log("Has recogido la hortaliza");
});



