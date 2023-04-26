// MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu()
{
    if(menu_visible==false){
        menu.style.display= "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
// OCULTO EL MENI UNA VEZ QUE SELLECCION UNA OPCION

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    menu.style.display = "none";
    menu_visible = false;
}

// Crea las barras de una barra particular identificada por su id

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div")
        div.className= "e"
        id_barra.appendChild(div);

    }
}
// Se relacionan todas las barras generales para luego manipularlas
let html = document.getElementById("html")
crearBarra(html);
let javaScript = document.getElementById("javaScript")
crearBarra(javaScript);
let python = document.getElementById("python")
crearBarra(python);
let php = document.getElementById("php")
crearBarra(php);
let java = document.getElementById("java")
crearBarra(java);
let react = document.getElementById("react")
crearBarra(react);