let posicion = -200;
let posicion1 = -250;
let posicion2 = -150;
let posicion3 = -300;
var contador = 0;
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
        document.querySelector(".circulo1").style.visibility=  'visible';
    }
}

function moveNote2() {
    posicion1 += 8;
    document.querySelector(".circulo2").style.top = posicion1 + 'px';
    if (posicion1 >= (window.innerHeight)) {
        posicion1 = getRandomInt(200, 700) * -1;
        document.querySelector(".circulo2").style.visibility=  'visible';
    }
}

function moveNote3() {
    posicion2 += 8;
    document.querySelector(".circulo3").style.top = posicion2 + 'px';
    if (posicion2 >= (window.innerHeight)) {
        posicion2 = getRandomInt(200, 700) * -1;
        document.querySelector(".circulo3").style.visibility=  'visible';
    }
}

function moveNote4() {
    posicion3 += 8;
    document.querySelector(".circulo4").style.top = posicion3 + 'px';
    if (posicion3 >= (window.innerHeight)) {
        posicion3 = getRandomInt(200, 700) * - 1;
        document.querySelector(".circulo4").style.visibility=  'visible';
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

document.addEventListener('keyup', function (event) {
    if (event.key === 'd') {
        // Verifica si el círculo 4 está dentro de los píxeles definidos
        if (posicion >= 620 && posicion<= 700) {
            contador += 1000;
            document.querySelector(".circulo1").style.visibility = 'hidden';
            actualizarPuntaje(); // Asegúrate de que esta función actualice el contador en el HTML
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'f') {
        // Verifica si el círculo 4 está dentro de los píxeles definidos
        if (posicion1 >= 620 && posicion1 <= 700) {
            contador += 1000;
            document.querySelector(".circulo2").style.visibility = 'hidden';
            actualizarPuntaje(); // Asegúrate de que esta función actualice el contador en el HTML
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'h') {
        // Verifica si el círculo 4 está dentro de los píxeles definidos
        if (posicion2 >= 620 && posicion2 <= 700) {
            contador += 1000;
            document.querySelector(".circulo3").style.visibility = 'hidden';
            actualizarPuntaje(); // Asegúrate de que esta función actualice el contador en el HTML
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'j') {
        // Verifica si el círculo 4 está dentro de los píxeles definidos
        if (posicion3 >= 620 && posicion3 <= 700) {
            contador += 1000;
            document.querySelector(".circulo4").style.visibility = 'hidden';
            actualizarPuntaje(); // Asegúrate de que esta función actualice el contador en el HTML
        }
    }
});

function actualizarPuntaje() {
    document.getElementById('puntajeDisplay').textContent = contador;
}