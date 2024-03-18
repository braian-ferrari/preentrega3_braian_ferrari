const nombreInput = document.getElementById("nombreModal");
const posicionInput = document.getElementById("posicionModal");
const estaturaInput = document.getElementById("estaturaModal");
const equipoInput = document.getElementById("equipoModal");
const datosPerfil = document.querySelector(".datos-Perfil");

//ventana modal
const btnLanzarModal = document.querySelector("#lanzar-modal");
const btnOcultarModal = document.querySelector("#ocultar-modal");

const contModal = document.querySelector(".contenedor-modal");

btnLanzarModal.addEventListener("click", (e) => {
    e.preventDefault();
    contModal.classList.add("mostrar");
});

btnOcultarModal.addEventListener("click", (e) => {
    e.preventDefault();
    contModal.classList.remove("mostrar");

    // Crear nuevos elementos <li> para cada dato
    const liNombre = document.createElement("li");
    const liPosicion = document.createElement("li");
    const liEstatura = document.createElement("li");
    const liEquipo = document.createElement("li");

    // Asignar los valores a las etiquetas de lista
    liNombre.textContent = `Nombre: ${nombreInput.value}`;
    liPosicion.textContent = `Posición: ${posicionInput.value}`;
    liEstatura.textContent = `Estatura: ${estaturaInput.value}`;
    liEquipo.textContent = `Equipo: ${equipoInput.value}`;

    // Agregar los elementos <li> al <ul> con la clase "datos-Perfil"
    datosPerfil.appendChild(liNombre);
    datosPerfil.appendChild(liPosicion);
    datosPerfil.appendChild(liEstatura);
    datosPerfil.appendChild(liEquipo);

    // Limpiar los campos del formulario después de enviar
    nombreInput.value = "";
    posicionInput.value = "";
    estaturaInput.value = "";
    equipoInput.value = "";
});
const btnAgregarEstadisticas = document.getElementById("btnAgregarEstadisticas");
const contenedorModalEstadisticas = document.querySelector(".contenedor-modal-estadisticas");

btnAgregarEstadisticas.addEventListener("click", () => {
    contenedorModalEstadisticas.style.display = "flex"; // Cambia el valor a "flex" para mostrar la ventana modal
});

window.addEventListener("click", (event) => {
    if (event.target === contenedorModalEstadisticas) {
        contenedorModalEstadisticas.style.display = "none"; // Oculta la ventana modal al hacer clic fuera de ella
    }
});

const formularioEstadisticas = document.getElementById("formularioEstadisticas");
const bodyTablaEstadisticas = document.getElementById("bodyTablaEstadisticas");

formularioEstadisticas.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de las estadísticas del formulario
    const puntos = document.getElementById("puntos").value;
    const asistencias = document.getElementById("asistencias").value;
    const rebotes = document.getElementById("rebotes").value;
    const perdidas = document.getElementById("perdidas").value;
    const recuperados = document.getElementById("recuperados").value;
    const minutos = document.getElementById("minutos").value;

    // Crear una nueva fila de tabla
    const nuevaFila = document.createElement("tr");

    // Insertar las celdas con los valores de las estadísticas
    nuevaFila.innerHTML = `
        <td>${puntos}</td>
        <td>${asistencias}</td>
        <td>${rebotes}</td>
        <td>${perdidas}</td>
        <td>${recuperados}</td>
        <td>${minutos}</td>
    `;

    // Agregar la nueva fila al cuerpo de la tabla
    bodyTablaEstadisticas.appendChild(nuevaFila);

    // Limpiar los campos del formulario
    formularioEstadisticas.reset();

    // Ocultar la ventana modal de estadísticas
    contenedorModalEstadisticas.style.display = "none";
});

function sumarEstadisticas() {
    // Obtener todas las celdas de la tabla de estadísticas
    const celdas = document.querySelectorAll("#bodyTablaEstadisticas td");

    // Inicializar variables para las sumas
    let totalPuntos = 0;
    let totalAsistencias = 0;
    let totalRebotes = 0;
    let totalPerdidas = 0;
    let totalRecuperados = 0;
    let totalMinutos = 0;

    // Iterar sobre todas las celdas y sumar los valores correspondientes
    celdas.forEach((celda, index) => {
        const valor = parseInt(celda.textContent);
        switch (index % 6) { // Hay 6 columnas en la tabla
            case 0:
                totalPuntos += valor;
                break;
            case 1:
                totalAsistencias += valor;
                break;
            case 2:
                totalRebotes += valor;
                break;
            case 3:
                totalPerdidas += valor;
                break;
            case 4:
                totalRecuperados += valor;
                break;
            case 5:
                totalMinutos += valor;
                break;
        }
    });

    // Actualizar el contenido del div de resumen de estadísticas
    const resumenEstadisticas = document.querySelector(".resumen-estadisticas");
    resumenEstadisticas.innerHTML = `
        <h2>Resumen de Estadísticas</h2>
        <p>Total Puntos: ${totalPuntos}</p>
        <p>Total Asistencias: ${totalAsistencias}</p>
        <p>Total Rebotes: ${totalRebotes}</p>
        <p>Total Perdidas: ${totalPerdidas}</p>
        <p>Total Recuperados: ${totalRecuperados}</p>
        <p>Total Minutos: ${totalMinutos}</p>
    `;
}

// Llamar a la función para sumar estadísticas cada vez que se envía el formulario
formularioEstadisticas.addEventListener("submit", function (event) {
    event.preventDefault();
    sumarEstadisticas();
});
