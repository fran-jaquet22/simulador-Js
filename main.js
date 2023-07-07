class catalogoA{
    constructor(id, marca, producto, precio, img){
        this.id = id
        this.marca = marca
        this.producto = producto
        this.precio = precio
        this.img = img
    }
}

//Instalacion de objetos

const item1 = new catalogoA (1, "Castrol", "Aceite", 4000, "castrol1540.jpg")

const item2 = new catalogoA (2, "Mareno", "Filtro", 1200, "mareno.jpg")

const item3 = new catalogoA (3, "Total", "Aceite", 3500, "total1540.jpg")

const item4 = new catalogoA (4, "Castrol", "Aceite", 2000, "castrol1L.jpg")

const item5 = new catalogoA (5, "Motul", "Aceite", 2700 , "motul.jpg")

const item6 = new catalogoA (6, "Malhe", "Filtro", 1250, "malhe.jpg")

const item7 = new catalogoA (7, "ACdelco", "Filtro", 1200, "acdelco.jpg")

const estanteria = []
estanteria.push(item1, item2, item3, item4, item5, item6, item7)




let productosDiv = document.getElementById("producto")
/* let nuevoProductoDiv = document.createElement("div")

    nuevoProductoDiv.innerHTML = `<div id="${item2.id}" class="card" style="width: 18rem;">
                                <img src="img/mareno.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h4 class="card-title">${item2.marca}</h5>
                                    <p class="card-text">tipo: ${item2.producto}</p>
                                    <p class="">Precio: ${item2.precio}</p>
                                    <a href="#" class="btn btn-primary">Agregar al carrito</a>
                                </div>
                            </div>
    `
productosDiv.appendChild(nuevoProductoDiv) */

//recorrer estanteria para imprimir TODOS los elemientos de mi array
function mostrarCatalogo(array){
    for(let item of array){
        let nuevoProductoDiv = document.createElement("div")
        nuevoProductoDiv.className = "col-12 col-md-6 col-lg-4 my-2"
        nuevoProductoDiv.innerHTML = `<div id="${item.id}" class="card" style="width: 18rem;">
                                    <img src="img/${item.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h4 class="card-title">${item.marca}</h5>
                                        <p class="card-text">tipo: ${item.producto}</p>
                                        <p class="">Precio: ${item.precio}</p>
                                        <a href="#" class="btn btn-primary">Agregar al carrito</a>
                                    </div>
                                </div>
    `
    productosDiv.appendChild(nuevoProductoDiv)
    }
}
mostrarCatalogo(estanteria)