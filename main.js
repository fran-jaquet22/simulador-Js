
let containerCard = document.getElementById("containerCard")
let carrito = []

//recorrer estanteria para imprimir TODOS los elementos de mi array
estanteria.forEach((item)=>{
    let content = document.createElement("div");
    content.className = `col-12 col-md-6 col-lg-4 my-2`;
    content.innerHTML = `<div id="${item.id}" class="card" style="width: 18rem;">
    <img src="img/${item.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h4 class="card-title">${item.marca}</h5>
    <p class="card-text">tipo: ${item.producto}</p>
    <p class="">Precio: ${item.precio}</p>
    <button type="button" id="btnCarrito${item.id}" class="btn btn-success">Agregar al carrito</button>
    </div>
    </div>`;
    containerCard.appendChild(content);

    let btnCarrito = document.getElementById(`btnCarrito${item.id}`)

    btnCarrito.addEventListener("click", ()=>{
        console.log(`se agrego ${item.producto}`)
    })
    
})

