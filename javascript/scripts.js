// Función para cambiar el contenido del div
function cambiarContenido() {
    var contenido = document.getElementById("gitar").innerHTML      
    document.getElementById("menu").innerHTML = contenido;
}

// Función para restaurar el contenido original del div
function volverAlMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("gitar").style.display = "none";
}

function mostrarMenu() {
    document.getElementById("menu-pausa").style.display = "block";
}

function ocultarMenu() {
    document.getElementById("menu-pausa").style.display = "none";
}