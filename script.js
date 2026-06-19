const myFormulario = document.querySelector(".formulario");
const myMascaraForm = document.querySelector(".mascara-formulario");

function mostrarForm() {

    myFormulario.style.left = "50%";
    myFormulario.style.transform = "translateX(-50%)";
    myMascaraForm.style.visibility = "visible";
}

function esconderForm() {
    myFormulario.style.left = "-340px";
    myFormulario.style.transform = "translateX(0)";
    myMascaraForm.style.visibility = "hidden";
}
