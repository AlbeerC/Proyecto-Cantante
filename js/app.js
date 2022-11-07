const bioBtn = document.querySelector(".footer__boton");
const info = document.querySelector(".bioInfo");
const btnCerrar = document.querySelector(".btnCerrar");

// Mostrar mensaje cuando se presiona el botón de bio
bioBtn.addEventListener("click", function() {
    info.classList.add("display");
});

// Cerrar el mensaje cuando se presiona el botón de X
if (btnCerrar) {
    btnCerrar.addEventListener("click", function() {
        info.classList.remove("display");
    });
}





// Validador del formulario de suscripción

const datos = {
    nombre: "",
    email: "",
    documento: "",
    ciudad: "",
    direccion: "",
    talle: "",
} 

const formulario = document.getElementById('formulario');

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const { nombre, email, documento, ciudad, direccion, talle } = datos;

    (nombre === "" || email === "" || documento === "" || ciudad === "" || direccion === "" || talle === "") ? mostrarError() : mostrarMensaje();
});


// Mostrar un mensaje de error si hay al menos un campo vacío
function mostrarError() {
    const alerta = document.createElement("p");
    alerta.innerText = ("Todos los campos son obligatorios");
    alerta.classList.add("error");
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


// Mostrar un mensaje de enviado si se llenó correctamente el formulario
function mostrarMensaje() {
    const alerta = document.createElement("p");
    alerta.innerText = ("Recibido correctamente");
    alerta.classList.add("enviado");
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
        formulario.reset();
    }, 3000);
}

// Eventos de los Inputs
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const documento = document.getElementById("documento");
const ciudad = document.getElementById("ciudad");
const direccion = document.getElementById("direccion");
const talle = document.getElementById("talle");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
documento.addEventListener("input", leerTexto);
ciudad.addEventListener("input", leerTexto)
direccion.addEventListener("input", leerTexto);
talle.addEventListener("input", leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(e.target.value);
}
