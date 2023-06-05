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

let salirMenu = false

do{
let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
   1 - Contacto
   2 - Visita a la fabrica
   3 - Deja tu CV
   4 - Obtene nuestras ofertas semanales
   0 - Salir del menu`))
   switch(opcionIngresada){
      case 1:
         alert("Mail de contacto: fran@gmail.com")
        break
      case 2:
         horarios()
        break
      case 3:
         alert("Envianos tu CV al mail que aparece acontinuacion: trabaja@gmail.com")
        break   
      case 4:
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