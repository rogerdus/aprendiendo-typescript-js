let nuevo_post = JSON.stringify({
    title: "El nuevo post rogelio",
    body: "Contenido del post",
    userId: 54
});

console.log(nuevo_post);

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: "POST",
    body: nuevo_post,
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(datos => console.log(datos));