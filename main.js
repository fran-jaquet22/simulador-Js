
let productosDiv = document.getElementById("producto")

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

let verCatalogo = document.getElementById("verCatalogo")
verCatalogo.addEventListener("click", ()=>{
    mostrarCatalogo(estanteria)
})

//array vacio para ocultar el catalogo
productosDiv.innerHTML = ``

let ocultarCatalogo = document.getElementById("ocultarCatalogo")
ocultarCatalogo.addEventListener("click",()=>{
    productosDiv.innerHTML = ``
})

//boton para agregar
let agregarProductoBoton = document.getElementById("guardarBoton")

agregarProductoBoton.addEventListener("click", function(event){
    event.preventDefault()
    agregarProducto(estanteria)
})

//agregar producto 
function agregarProducto(){
    let marcaIngresada = document.getElementById("marcaInput")
    let productoIngresado = document.getElementById("productoInput")
    let precioIngresado = document.getElementById("precioInput")

    const productoNuevo = new catalogoA (estanteria.length+1, marcaIngresada.value, productoIngresado.value, precioIngresado.value)

    estanteria.push(productoNuevo)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))

    //reset del form
    marcaIngresada.value = ``
    productoIngresado.value = ``
    precioIngresado.value = ``

}
