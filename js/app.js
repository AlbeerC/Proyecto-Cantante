const bioBtn = document.querySelector(".footer__boton");
const info = document.querySelector(".bioInfo");
const btnCerrar = document.querySelector(".btnCerrar");

// Mostrar mensaje cuando se presiona el botón de bio
bioBtn.addEventListener("click", function() {
    info.classList.add("display");
});

// Cerrar el mensaje cuando se presiona el botón de X
btnCerrar.addEventListener("click", function() {
    info.classList.remove("display")
});