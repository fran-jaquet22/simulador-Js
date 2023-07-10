//Modo oscuro

let botonModoOscuro = document.getElementById("modoOscuro")
let botonModoClaro = document.getElementById("modoClaro")

let modoOscuro = localStorage.getItem("modoOscuro")

if(modoOscuro == "true"){
    document.body.classList.add("botonModoOscuro")
}

botonModoOscuro.addEventListener("click", ()=>{
    document.body.classList.add("botonModoOscuro")
    //storage
    localStorage.setItem("modoOscuro", true)
})

botonModoClaro.addEventListener("click", ()=>{
    document.body.classList.remove("botonModoOscuro")
    localStorage.setItem("modoOscuro", false)
})