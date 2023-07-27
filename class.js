class catalogoA{
    constructor(id, marca, producto, precio, img){
        this.id = id
        this.marca = marca
        this.producto = producto
        this.precio = precio
        this.img = img
    }
}

//Instalacion de objetos async await
const imprimirStock = async ()=>{
    const res = await fetch("stock.json")
    const data = await res.json()
    
    console.log(data)
    for(let item of data){
        let itemNuevo = new catalogoA(item.id, item.marca, item.producto, item.precio, item.img)
        estanteria.push(itemNuevo)
    }
    console.log(estanteria)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}

let estanteria = []

if(localStorage.getItem("estanteria")){
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}else{
    console.log(`primera vec`)
    imprimirStock(estanteria)
}