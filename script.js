
const btnModoOscuro = document.getElementById("btnModoOscuro");
const body = document.body;

const formNotas = document.getElementById("formNotas");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputNota = document.getElementById("nota");
const cuerpoTabla = document.getElementById("cuerpoTabla");

formNotas.addEventListener("submit", function(evento){

    evento.preventDefault();

    const valorNombre = inputNombre.value.trim();
    const valorApellido = inputApellido.value.trim();
    const valorNota = inputNota.value.trim();

    let hayErrores = false;

    if (valorNombre === "") {
        inputNombre.classList.add("borde-rojo");
        hayErrores = true;
    }else{
        inputNombre.classList.remove("borde-rojo");

    }

    if (valorApellido === "") {
        inputApellido.classList.add("borde-rojo");
        hayErrores= true;
    }else{
        inputApellido.classList.remove("borde-rojo");
    }

    if (valorNota === "") {
        inputNota.classList.add("borde-rojo");
        hayErrores = true ;
    }else{
        inputNota.classList.remove("borde-rojo");
        if (valorNota > 10 || valorNota < 1) {
            inputNota.classList.add("borde-rojo");
            hayErrores = true ;
        }
    }

    if (hayErrores === false) {
        console.log("datos enviados");
        const notaNumero = parseInt(valorNota);

        const nuevafila = cuerpoTabla.insertRow(-1);

        const columnaNombre = nuevafila.insertCell(0);
        const columnaApellido = nuevafila.insertCell(1);
        const columnaNota = nuevafila.insertCell(2);
        const columnaCondicion = nuevafila.insertCell(3);
        const columnaAcciones = nuevafila.insertCell(4);

        columnaNombre.textContent = valorNombre;
        columnaApellido.textContent = valorApellido;
        columnaNota.textContent = notaNumero;

        if (notaNumero >= 6) {
            columnaCondicion.textContent = "Aprobado";

        }else{
            columnaCondicion.textContent = "Desaprobado";
        }

    }




});

