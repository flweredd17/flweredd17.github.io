campo = document.getElementById("campo")
boton = document.getElementById("entrar")
imagen = document.getElementById("imagen")


boton.addEventListener("click", function() {
if (campo.value == "HabibiHammut17") {
window.location.href = "pagina2.html";
} else {
    imagen.style.visibility = "visible"
}
});