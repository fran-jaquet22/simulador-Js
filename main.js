
let containerCard = document.getElementById("containerCard")
let carrito = []


//recorrer estanteria para imprimir TODOS los elementos de mi array
function mostrarStock(){
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
            /* console.log(`se agrego ${item.producto}`) */
            agregrarAlCarrito(item)
        })
        
    })
}
/* mostrarStock() */

/* seteado del storage del carrito */
if(localStorage.getItem("carro")){
    carrito = JSON.parse(localStorage.getItem("carro"))
}else{
    carrito = []
    localStorage.setItem("carro", carrito)
}

function agregrarAlCarrito(item){
    let itemEnCarrito = carrito.find((prod)=> prod.id == item.id)
    if(itemEnCarrito == undefined){
        carrito.push(item)
        localStorage.setItem("carro", JSON.stringify(carrito))
        Swal.fire({
            icon: 'success',
            title: 'Exelente!',
            text: 'Agregaste el producto al carrito!',
            timer: 1500,
            confirmButtonColor: "lightGreen"
          })
    }else{
        Swal.fire({
            icon: 'warning',
            title: 'ATENCION!',
            text: 'El producto ya se encuentra en el carrito!',
            timer: 1300,
            confirmButtonColor: "orange"
          })
    }
}

/* funcion del modal del carrito */

let botonDelCarrito = document.getElementById("carritoBtn")
let setCarrito = document.getElementById("modalCarrito")

function llenarCarrito(arr){
    modalCarrito.innerHTML=``
    arr.forEach((llenarElCarrito)=>{
        modalCarrito.innerHTML +=`
            <div class="card" id="cardItem${llenarElCarrito.id}" style="width: 11rem;">
                <img src="img/${llenarElCarrito.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${llenarElCarrito.marca}</h5>
                    <p class="card-text">tipo: ${llenarElCarrito.producto}</p>
                    <p class="card-text">precio: ${llenarElCarrito.precio}</p>
                    <button class="btn btn-danger" id="eliminarUnidad${llenarElCarrito.id}">Eliminar</buttom>
                </div>
            </div>
        `  
    })
    
    /* eliminar un objeto del carrito */
    arr.forEach((llenarElCarrito)=>{
        document.getElementById(`eliminarUnidad${llenarElCarrito.id}`).addEventListener("click", ()=>{
            let card = document.getElementById(`cardItem${llenarElCarrito.id}`)
            card.remove()
            let eliminarItem = arr.find((objeto)=> objeto.id == llenarElCarrito.id)
            let indice = arr.indexOf(eliminarItem)
            arr.splice(indice, 1)
            localStorage.setItem("carro", JSON.stringify(arr))
            sumaTotal(arr)
        })
    })

    sumaTotal(arr)
    
}

/* Suma total del carrito */
let precioTotalModal = document.getElementById("precioTotalModal")
function sumaTotal(arr){
    let total = arr.reduce((acumulador, item)=> acumulador + item.precio, 0)
    if(total == 0){
        precioTotalModal.innerHTML = `El carrito esta vacio!`
    }else{
        precioTotalModal.innerHTML = `El subtotal es ${total}`
    }
}


botonDelCarrito.addEventListener("click", ()=>{
    llenarCarrito(carrito)
})

/* Finalizar compra */
let botonFinalizar = document.getElementById("comprarItem")
botonFinalizar.addEventListener("click", ()=>{
    Swal.fire({
        icon: 'success',
        title: 'La compra se realizo exitosamente!',
        text: 'Pronto la compra llegara a su domicilio',
        timer: 3000,
        confirmButtonColor: "lightGreen"
      })
})

/* asincronia */
let cargarStock = document.getElementById("cargarStock")
setTimeout(()=>{
    cargarStock.remove()
    mostrarStock(estanteria)
},1500)

/* const imprimirStock = async ()=>{
    const res = await fetch("stock.json")
    const data = await res.json()
    console.log(`info cap`)
    console.log(data)
}
imprimirStock */