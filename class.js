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

let estanteria = []

if(localStorage.getItem("estanteria")){
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}else{
    estanteria.push(item1, item2, item3, item4, item5, item6, item7)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}

