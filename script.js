
const btnModoOscuro = document.getElementById("btnModoOscuro");
const body = document.body;

btnModoOscuro.addEventListener("click",function(){

    body.classList.toggle("dark-mode");

});




const formNotas = document.getElementById("formNotas");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputNota = document.getElementById("nota");
const cuerpoTabla = document.getElementById("cuerpoTabla");
const textoPromedio = document.getElementById("promedio");

function actualizarPromedio (){

    const cantFilas = cuerpoTabla.rows.length;

    if (cantFilas === 0) {
        textoPromedio.textContent = "Promedio: -";
        return;
    }

    let sumaTotal = 0;

    for (let index = 0; index < cantFilas; index++) {
        const textoNota = cuerpoTabla.rows[index].cells[2].textContent;
        
       sumaTotal += parseInt (textoNota); 
    }

    const promedio = sumaTotal / cantFilas;
    textoPromedio.textContent = "Promedio: " + promedio.toFixed(2);

}





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

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        const columnaNombre = nuevafila.insertCell(0);
        const columnaApellido = nuevafila.insertCell(1);
        const columnaNota = nuevafila.insertCell(2);
        const columnaCondicion = nuevafila.insertCell(3);
        const columnaAcciones = nuevafila.insertCell(4);

       


        columnaNombre.textContent = valorNombre;
        columnaApellido.textContent = valorApellido;
        columnaNota.textContent = notaNumero;
        columnaAcciones.appendChild(btnEliminar);

        if (notaNumero >= 6) {
            columnaCondicion.textContent = "Aprobado";

        }else{
            columnaCondicion.textContent = "Desaprobado";
        }

        actualizarPromedio();

        btnEliminar.addEventListener("click", function(){

            nuevafila.remove();
            actualizarPromedio();

        });
    
        formNotas.reset();
        


    }

   



});

