let posicion = -200;
let posicion1 = -250;
let posicion2 = -150;
let posicion3 = -300;
let intervalo;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function velocidad(){
    var min=10;
    var max=100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function moveNote1() {
    posicion += 8;
    document.querySelector(".circulo1").style.top = posicion + 'px';
    if (posicion >= (window.innerHeight)) {
        posicion = getRandomInt(200, 700) * -1
    }
}

function moveNote2() {
    posicion1 += 8;
    document.querySelector(".circulo2").style.top = posicion1 + 'px';
    if (posicion1 >= (window.innerHeight)) {
        posicion1 = getRandomInt(200, 700) * -1;
    }
}

function moveNote3() {
    posicion2 += 8;
    document.querySelector(".circulo3").style.top = posicion2 + 'px';
    if (posicion2 >= (window.innerHeight)) {
        posicion2 = getRandomInt(200, 700) * -1;
    }
}

function moveNote4() {
    posicion3 += 8;
    document.querySelector(".circulo4").style.top = posicion3 + 'px';
    if (posicion3 >= (window.innerHeight)) {
        posicion3 = getRandomInt(200, 700) * - 1;
    }
}

function start() {
    
    intervalo = setInterval(function () {
        moveNote1();
        moveNote2();
        moveNote3();
        moveNote4();
    }, 40);
}

function cambiarContenido() {
    var contenido = document.getElementById("gitar").innerHTML
    document.getElementById("menu").innerHTML = contenido;
    start();
}

function mostrarMenu() {
    document.getElementById("menu-pausa").style.display = "block";
}

function ocultarMenu() {
    document.getElementById("menu-pausa").style.display = "none";
}