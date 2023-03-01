/* document.getElementById('boton').onclick = function () {
    document.getElementById("demo").innerHTML = "Hemos reemplazado el texto";
} */

document.getElementById("carrera").onmouseover = function changeText(id) { 
    document.getElementById("carrera").innerHTML = "UTN Reg.Córdoba 1995";
    var objeto = document.getElementById("carrera");
    objeto.style.backgroundColor = "blue";
    objeto.style.color = "white";
}

document.getElementById("carrera").onmouseout = function changeText(id) {
    document.getElementById("carrera").innerHTML = "Ingeniero Mecánico";
    var objeto = document.getElementById("carrera");
    objeto.style.backgroundColor = "rgb(244, 244, 242)";
    objeto.style.color = "black";
}

