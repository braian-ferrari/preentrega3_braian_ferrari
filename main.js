let totalTiros = 0;
let totalTirosConvertidos = 0;
let totalRebotesTomados = 0;
let totalAsistenciasDadas = 0;
let totalMinutosJugados = 0;
let porcentajeTirosConvertidos = 0;
let porcentajeRebotesTomados = 0;
let porcentajeAsistenciasDadas = 0;
let porcentajeMinutosJugados = 0;
let perfil =crearUsuario;
function crearUsuario(Nombre, Apellido, Usuario, Email, Telefono) {
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Usuario = Usuario;
    this.Email = Email;
    this.Telefono = Telefono;
}

let primerIngreso = prompt("Bienvenido a Basquet ARG, es su primer ingreso?")

if (primerIngreso.toLowerCase() === "si" || primerIngreso.toUpperCase() === "SÍ") {
    let nombreIngresado = prompt("Por favor ingrese su nombre");
    let apellidoIngresado = prompt("Por favor ingrese su apellido");
    let usuarioIngresado = prompt("ingrese el nombre de su usuario");
    let correoElectronico = prompt("ingrese su email");
    let telefonoContacto = prompt("ingese su numero de contacto");
    const miUsuario = new crearUsuario(nombreIngresado, apellidoIngresado, usuarioIngresado, correoElectronico, telefonoContacto)
} else if (primerIngreso.toLowerCase() === "no" || primerIngreso.toUpperCase() === "NO") {
    let usuario = prompt("Ingrese su usuario");
    let contraseña = prompt("Ingrese contraseña");
} else {
    alert("Comando no valido 🚨🚨🚨 ");
    
}

let menu = prompt("1-Ver perfil creado \n 2-Calcular Estadisticas \n 3-Salir");

function calcularTotales(partidosJugados) {
    if (partidosJugados != 0) {
        for (let i = 1; i <= partidosJugados; i++) {
            let tiros = parseInt(prompt("Cuantos tiros en total en el partido " + i));
            let tirosConvertidosPartido = parseInt(prompt("Cuantos convirtio en el partido " + i));
            let rebotesTomadosPartido = parseInt(prompt("Cuantos rebotes tomo en el partido " + i));
            let asistenciasDadasPartido = parseInt(prompt("Cuantas asistencias en el partido " + i));
            let minutosJugadosPartido = parseInt(prompt("¿Cuanto minutos jugó en el partido " + i));

            totalTiros += tiros;
            totalTirosConvertidos += tirosConvertidosPartido;
            totalRebotesTomados += rebotesTomadosPartido;
            totalAsistenciasDadas += asistenciasDadasPartido;
            totalMinutosJugados += minutosJugadosPartido;
            console.log("Tiros convertidos en el partido:" + tirosConvertidosPartido);
            console.log("Rebotes tomados en el partido: " + rebotesTomadosPartido);
            console.log("asistencias dadas en el partido: " +  asistenciasDadasPartido);
            console.log("minutos jugados: " + totalMinutosJugados);
            
            let verPorcentajes = prompt("queres ver tus porcentajes?");
            if (verPorcentajes.toLowerCase() == "si" || verPorcentajes.toUpperCase() == "SI") {
                CalcularPorcentajes(totalTiros, totalTirosConvertidos, totalRebotesTomados, totalAsistenciasDadas, totalMinutosJugados);
            }
        }
    } else {
        alert("No se Jugaron Partidos🚨🚨🚨");
    }
}

function CalcularPorcentajes(totalTiros, totalTirosConvertidos) {
    porcentajeTirosConvertidos = (totalTirosConvertidos / totalTiros) * 100;


    console.log("Tu porcentaje de Tiros Convertidos: " + porcentajeTirosConvertidos + "%");
}

    while (menu != "3") {
        switch (menu) {
            case "1":
                console.log(perfil.Nombre);
                console.log(perfil.Apellido);
                console.log(perfil.Usuario);
                console.log(perfil.Email);
                console.log(perfil.Telefono);
                break;
            case "2":
                let partidosJugados = parseInt(prompt("Indique  el numero de partidos jugados"));
                calcularTotales(partidosJugados);
                break;
        }
        menu = prompt("1-Ver perfil Creado \n 2-Calcular Estadisticas \n 3-Salir");
    }

    alert("Muchas Gracias por utilizar Basquet Arg");