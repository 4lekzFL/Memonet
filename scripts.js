// Respuestas correctas
const respuestasCorrectas = [
    "servidor",         // Respuesta para la pregunta 1
    "Servidor de streaming", // Respuesta para la pregunta 2
    "Servidor de listas de correo", // Respuesta para la pregunta 3
    "peer-to-peer", // Respuesta para la pregunta 4
    "Dominio de nivel superior (TLD)", // Respuesta para la pregunta 5
    "Dominios", // Respuesta para la pregunta 6
    "CNAME", // Respuesta para la pregunta 7
    "Scope DHCP", // Respuesta para la pregunta 8
    "HTTP", // Respuesta para la pregunta 9
    "Apache", // Respuesta para la pregunta 10
    "Single Sign-On (SSO)", // Respuesta para la pregunta 11
    "Nombres de entidades distintivas (Distinguished Names)", // Respuesta para la pregunta 12
    "VPN", // Respuesta para la pregunta 13
    "Stateful Inspection", // Respuesta para la pregunta 14
    "Virtualización", // Respuesta para la pregunta 15
    "Hyper-V" // Respuesta para la pregunta 16
];

// Función para verificar respuestas
function verificarRespuestas() {
    let puntos = 0; // Puntuación del usuario
    let totalPreguntas = respuestasCorrectas.length; // Número total de preguntas
    let resultado = ''; // Almacenar el feedback del usuario

    // Validar las respuestas
    for (let i = 0; i < totalPreguntas; i++) {
        let respuestaUsuario = document.getElementById(`respuesta${i + 1}`).value.trim();
        let contenedorRespuesta = document.getElementById(`respuesta${i + 1}`);

        if (respuestaUsuario.toLowerCase() === respuestasCorrectas[i].toLowerCase()) {
            contenedorRespuesta.classList.add("correcto");
            contenedorRespuesta.classList.remove("incorrecto");
            puntos++; // Incrementar la puntuación por respuesta correcta
        } else {
            contenedorRespuesta.classList.add("incorrecto");
            contenedorRespuesta.classList.remove("correcto");
        }
    }

    // Mostrar el resultado final
    resultado = `Has obtenido ${puntos} de ${totalPreguntas} puntos.`;
    document.getElementById("resultado").textContent = resultado;
}

// Respuestas correctas para el ejercicio de Verdadero o Falso
const respuestasVF = {
    pregunta1: "verdadero",
    pregunta2: "verdadero",
    pregunta3: "falso", // El proceso típico tiene 4 pasos
    pregunta4: "verdadero", // Los atributos representan recursos en redes Microsoft
    pregunta5: "falso", // Solo existen 3 tipos principales de grupos en Active Directory
    pregunta6: "verdadero", // Un dominio está formado por árboles, bosques y UO
    pregunta7: "verdadero", // Mínimo en un dominio debe haber un Controlador de Dominio
    pregunta8: "falso", // ISA Server bloquea todo por defecto
    pregunta9: "verdadero", // El proxy permite acelerar el acceso a internet
    pregunta10: "verdadero" // La virtualización ayuda al medio ambiente
};

// Función para verificar respuestas de Verdadero o Falso
function verificarVerdaderoFalso() {
    let puntosVF = 0;
    let totalPreguntasVF = Object.keys(respuestasVF).length;
    let resultadoVF = '';

    // Validar cada pregunta
    for (let pregunta in respuestasVF) {
        let respuestaUsuario = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (respuestaUsuario && respuestaUsuario.value === respuestasVF[pregunta]) {
            puntosVF++; // Incrementar la puntuación si la respuesta es correcta
        }
    }

    // Mostrar el resultado final
    resultadoVF = `Has obtenido ${puntosVF} de ${totalPreguntasVF} puntos.`;
    document.getElementById("resultado-vf").textContent = resultadoVF;
}

// Función para mostrar la respuesta correcta
function mostrarRespuesta(numeroPregunta) {
    const respuestaCorrecta = document.getElementById(`respuestaCorrecta${numeroPregunta}`);
    respuestaCorrecta.style.display = 'block';
}

// Función para evaluar las respuestas abiertas según autoevaluación del usuario
function evaluarRespuestasAbiertas() {
    let puntosAbiertas = 0;
    let totalPreguntasAbiertas = 2; // Actualizar según el número de preguntas abiertas
    let resultadoAbiertas = '';

    // Revisar cada respuesta marcada como correcta por el usuario
    for (let i = 1; i <= totalPreguntasAbiertas; i++) {
        let respuestaCorrecta = document.getElementById(`correcta${i}`);
        if (respuestaCorrecta.checked) {
            puntosAbiertas++; // Incrementar puntos si el usuario marcó la respuesta como correcta
        }
    }

    // Mostrar el resultado final
    resultadoAbiertas = `Has marcado ${puntosAbiertas} de ${totalPreguntasAbiertas} respuestas como correctas.`;
    document.getElementById("resultado-abiertas").textContent = resultadoAbiertas;
}

let tarjetasVolteadas = [];
let paresEncontrados = 0;
let tiempoInicio;

function iniciarJuegoMemoria() {
    // Reiniciar el estado del juego
    tarjetasVolteadas = [];
    paresEncontrados = 0;
    tiempoInicio = new Date().getTime();
    document.getElementById("resultadoMemoria").textContent = '';

    // Agregar evento de clic a cada tarjeta
    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(tarjeta => {
        tarjeta.classList.remove("volteada");
        tarjeta.addEventListener("click", voltearTarjeta);
    });
}

function voltearTarjeta(event) {
    const tarjeta = event.target;

    // No permitir voltear más de 2 tarjetas a la vez
    if (tarjetasVolteadas.length < 2 && !tarjeta.classList.contains("volteada")) {
        tarjeta.classList.add("volteada");
        tarjetasVolteadas.push(tarjeta);

        // Si hay 2 tarjetas volteadas, verificar si coinciden
        if (tarjetasVolteadas.length === 2) {
            verificarPareja();
        }
    }
}

function verificarPareja() {
    const [tarjeta1, tarjeta2] = tarjetasVolteadas;

    if (tarjeta1.dataset.concepto === tarjeta2.dataset.concepto.replace("Def", "")) {
        // Par encontrado
        paresEncontrados++;
        tarjetasVolteadas = []; // Reiniciar las tarjetas volteadas

        // Verificar si el juego ha terminado
        if (paresEncontrados === 3) { // Actualizar según el número de pares
            finalizarJuego();
        }
    } else {
        // No es un par, voltear de nuevo después de un tiempo
        setTimeout(() => {
            tarjeta1.classList.remove("volteada");
            tarjeta2.classList.remove("volteada");
            tarjetasVolteadas = [];
        }, 1000);
    }
}

function finalizarJuego() {
    const tiempoFinal = new Date().getTime();
    const tiempoTotal = (tiempoFinal - tiempoInicio) / 1000;

    let mensajeLogro = '';
    if (tiempoTotal <= 20) {
        mensajeLogro = '¡Increíble velocidad! Has ganado una insignia de velocidad.';
    } else if (tiempoTotal <= 40) {
        mensajeLogro = '¡Buen trabajo! Sigue mejorando.';
    } else {
        mensajeLogro = '¡Has completado el juego! Sigue practicando para mejorar tu tiempo.';
    }

    document.getElementById("resultadoMemoria").textContent = `¡Has completado el juego en ${tiempoTotal} segundos! ${mensajeLogro}`;
}

// Función para alternar el contenido de las tarjetas de revisión rápida
function toggleTarjeta(numeroTarjeta) {
    const contenido = document.getElementById(`contenidoTarjeta${numeroTarjeta}`);
    contenido.style.display = contenido.style.display === 'block' ? 'none' : 'block';
}

// Función para alternar entre Modo Noche y Modo Día
function toggleModo() {
    const body = document.body;
    body.classList.toggle("modo-noche");

    // Guardar la preferencia en localStorage
    if (body.classList.contains("modo-noche")) {
        localStorage.setItem("modo", "noche");
    } else {
        localStorage.setItem("modo", "dia");
    }
}

// Verificar el modo guardado en localStorage
function verificarModo() {
    const modoGuardado = localStorage.getItem("modo");
    if (modoGuardado === "noche") {
        document.body.classList.add("modo-noche");
    }
}

// Llamar a la función al cargar la página
window.onload = verificarModo;


