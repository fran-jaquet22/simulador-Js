function solicitarMail(){
    let mailIngresado = prompt("Dejanos tu e-mail para recibir las ofertas")
    if(mailIngresado == ""){
        alert("Atencion!! Ingrese un E-mail valido")
    }
    else if(alert(`Las ofertas llegaran a: ${mailIngresado}`))
    return
}

function horarios(){
    let salir = false
    do{
    let horarioIngresado = parseInt(prompt(`Ingrese el horario que desea 
    1 - 10:00 hs
    2 - 14:00 hs
    3 - 16:00 hs
    0 - Cancelar`))
    switch(horarioIngresado){
        case 1:
            alert(`Felicidades! Usted tiene una visita para las 10:00 hs`)
            salir = true
            break
        case 2:
            alert(`Felicidades! Usted tiene una visita para las 14:00 hs`)
            salir = true
            break
        case 3:
            alert(`Felicidades! Usted tiene una visita para las 16:00 hs`)
            salir = true
            break
        case 0:
            salir = true
    }
    }while(!salir)
    return
}

//class constructora

class catalogoA{
    constructor(id, marca, producto, precio){
        this.id = id
        this.marca = marca
        this.producto = producto
        this.precio = precio
    }
}

//Instalacion de objetos

const item1 = new catalogoA (1, "Castrol", "Aceite", 4000)

const item2 = new catalogoA (2, "Mareno", "Filtro", 1200)

const item3 = new catalogoA (3, "Total", "Aceite", 3500)

const item4 = new catalogoA (4, "Castrol", "Aceite", 2000)

const item5 = new catalogoA (5, "Motul", "Aceite", 2700)

const item6 = new catalogoA (6, "Malhe", "Filtro", 1250)

const item7 = new catalogoA (7, "ACdelco", "Filtro", 1200)

const estanteria = []
estanteria.push(item1, item2, item3, item4, item5, item6, item7)
//console.log(estanteria)

function verCatalogo(array){
    console.log(`Nuestro catalogo es: `)
    
    for(let item of array){
        console.log(item.id, item.marca, item.producto, item.precio)
    }
}

//Metodo Busqueda
function encontrarPor(array){
    let datoBusqueda = prompt(`Ingrese la marca o producto que desea encontrar`)
    let busqueda = array.find(
        (dato) => dato.marca.toLowerCase() == datoBusqueda.toLowerCase() || dato.producto.toLowerCase() == datoBusqueda.toLowerCase() 
    )
    if(busqueda == undefined){
        console.log(`El dato ${datoBusqueda} no esta en nuestro catalogo`)
    }else{
        console.log(busqueda)
    }
}
//encontrarPor(estanteria)

//Metodo Filtrado
function filtrarPorMarcaProducto(array){
    let marcaBusqueda = prompt(`Ingrese la marca que esta buescando`)
    let busqueda = array.filter(
        (dato) => dato.marca.toLowerCase() == marcaBusqueda.toLowerCase() || dato.producto.toLowerCase() == marcaBusqueda.toLowerCase()
    )
    if(array.length == 0){
        console.log(`Para la marca ${marcaBusqueda} no se encontraron coincidencias`)
    }else{
        verCatalogo(busqueda)
    }
}
//filtrarPorMarcaProducto(estanteria)

function menu(){
    
    let salirMenu = false
    
    do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
       1 - Contacto
       2 - Visita a la fabrica
       3 - Ver el catalogo
       4 - buscar por marca o producto especifico
       5 - filtra por marca o producto
       6 - Obtene nuestras ofertas semanales
       0 - Salir del menu`))
       switch(opcionIngresada){
          case 1:
             alert("Mail de contacto: fran@gmail.com")
            break
          case 2:
             horarios()
            break
          case 3:
             verCatalogo(estanteria)
            break 
            case 4:
            encontrarPor(estanteria)
            break  
            case 5:
            filtrarPorMarcaProducto(estanteria)
            break
          case 6:
            solicitarMail()
            break
          case 0:
             alert(`Gracias por utilizar nuestra app. Saludos!`)
             salirMenu = true
            break   
          default:
             alert("Opción no válida, ingrese alguna presente en el menu")
            break
       }
    }while(!salirMenu)
}

//menu()