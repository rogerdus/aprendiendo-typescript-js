const hortaliza = document.querySelectorAll("#cesta > div");
const huerto = document.querySelector("#huerto");

/// DRAGSTART // DRAG // DRAGEND
tomates.forEach((tomate,indice) => {
    tomate.setAttribute("id","tomate"+indice);

    //DRAG
    tomate.addEventListener("dragstart", (e) => {
        console.log("estas moviendo el tomate: " + parseInt(indice + 1));
        // compartir info del elemento que muevo
        e.dataTransfer.setData("text", e.target.id);
    });
});

//DRAGENTER // DRAGOVER // DRAGLEAVE // DROP
huerto.addEventListener("dragover", (e) => {
    e.preventDefault();
    //huerto.classList.add("hover");
    //console.log("tomate moviendose");
});

huerto.addEventListener("drop", (e) => {
    e.preventDefault();
    //huerto.classList.add("hover");
    //console.log("tomate plantado");

    //Recibir informacion y soltar elemento en la zona

    let tomate = e.dataTransfer.getData("text");
    e.target.appendChild(document.querySelector("#"+tomate));
});

// huerto.addEventListener("dragleave", (e) => {
//     e.preventDefault();
//     //huerto.classList.add("hover");
//     console.log("tomate recogido");
// });

