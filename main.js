
//ventana modal
const btnLanzarModal = document.querySelector('#lanzar-modal');
const btnOcultarModal = document.querySelector('#ocultar-modal');

const contModal = document.querySelector('.contenedor-modal');

const nombreInput = document.querySelector('#nombreModal');
const posicionInput = document.querySelector('#posicionModal');
const estaturaInput = document.querySelector('#estaturaModal');
const equipoInput = document.querySelector('#equipoModal');

btnLanzarModal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.add('mostrar');
    const perfil=[
        {nombre:nombreInput.value},
        {posicion:posicionInput.value},
        {estatura: estaturaInput.value + " cm"},
        {equipo:equipoInput.value},
    ];
  
}
);

btnOcultarModal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.remove('mostrar');

    const empleado = document.querySelector('.contenedor');

    const datosPerfil = document.getElementById("datosPerfil");
    for (const datos of perfil) {
        const li = document.createElement("li");
        li.innerHTML = datos;
        datosPerfil.append(li);

}});
//cierro codigo de ventana modal

