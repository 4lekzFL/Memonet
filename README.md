# Memonet
Plataforma de ejercicios sobre Redes de Computadoras.

Este proyecto está desplegado y accesible a través de [GitHub Pages](https://4lekzfl.github.io/Memonet/). 

Puedes probar la plataforma interactiva visitando el siguiente enlace:  
🔗 [https://4lekzfl.github.io/Memonet/](https://4lekzfl.github.io/Memonet/)

Memonet, es una plataforma educativa interactiva diseñada para ayudar a los usuarios a practicar y memorizar conceptos técnicos de manera didáctica y entretenida. La plataforma está desarrollada utilizando únicamente **HTML**, **CSS** y **JavaScript**. Cuenta con secciones de ejercicios de "Completa los espacios en blanco", "Verdadero o Falso", un juego de memoria, una revisión rápida de conceptos clave y un Modo Noche/Día para mejorar la experiencia del usuario.

## Características

- **Completa los espacios en blanco**: Los usuarios completan frases con los términos correctos, obteniendo retroalimentación instantánea sobre su desempeño.
- **Verdadero o Falso**: Los usuarios responden preguntas de verdadero o falso con validación automática de respuestas.
- **Preguntas abiertas**: Permite a los usuarios escribir sus respuestas y compararlas con las correctas, con la posibilidad de autoevaluarse.
- **Juego de memoria**: Mini-juego en el que los usuarios emparejan conceptos con sus definiciones, con seguimiento del tiempo y logros.
- **Revisión rápida de conceptos**: Sección de tarjetas interactivas para consultar definiciones clave de forma rápida.
- **Modo Noche/Día**: Alterna entre modos de visualización claro y oscuro, guardando la preferencia del usuario.
- **Puntuación y retroalimentación visual**: En cada sección, los usuarios reciben puntuación inmediata y feedback visual sobre su desempeño.

## Estructura del Proyecto

La plataforma está organizada en varias secciones, cada una correspondiente a un tipo de ejercicio o funcionalidad:

1. **Completa los espacios en blanco**: Los usuarios completan frases con términos técnicos. Al verificar, se muestra si la respuesta es correcta o incorrecta.
2. **Verdadero o Falso**: Un conjunto de preguntas donde los usuarios deben seleccionar entre "Verdadero" y "Falso".
3. **Preguntas abiertas**: Los usuarios escriben sus respuestas y luego pueden compararlas con las respuestas correctas y autoevaluarse.
4. **Juego de Memoria**: Empareja conceptos con definiciones. El tiempo de finalización del juego se registra y se muestran logros basados en el tiempo.
5. **Revisión rápida de conceptos**: Tarjetas con conceptos clave. Al hacer clic, se muestran las definiciones correspondientes.
6. **Modo Noche/Día**: Cambia el tema de la página entre Modo Noche (oscuro) y Modo Día (claro), guardando la preferencia del usuario mediante `localStorage`.

## Estructura del Código

- `index.html`: Archivo principal que contiene la estructura HTML del proyecto.
- `styles.css`: Archivo CSS que contiene los estilos de la página, incluyendo la implementación del Modo Noche/Día.
- `scripts.js`: Archivo JavaScript que gestiona la lógica de interacción, como la verificación de respuestas, el juego de memoria, y la funcionalidad del Modo Noche/Día.

### Ejemplo de HTML para una sección de ejercicios:

```html
<!-- Ejemplo de pregunta de Verdadero o Falso -->
<section id="ejercicio2">
    <h1>Ejercicio de Verdadero o Falso</h1>
    <form id="ejercicio2-form">
        <div class="pregunta">
            <p>1. Los servidores DNS solo conocen nombres completos FQDNs.</p>
            <label><input type="radio" name="pregunta1" value="verdadero"> Verdadero</label>
            <label><input type="radio" name="pregunta1" value="falso"> Falso</label>
        </div>
        <button type="button" onclick="verificarVerdaderoFalso()">Verificar Respuestas</button>
    </form>
    <div id="resultado-vf"></div>
</section>
```

### Ejemplo de CSS para el Modo Noche:

```css
body.modo-noche {
    background-color: #1e1e1e;
    color: #f4f4f4;
}

body.modo-noche header {
    background-color: #121212;
}

body.modo-noche button {
    background-color: #444;
}
```

### Ejemplo de JavaScript para verificar respuestas de "Verdadero o Falso":

```javascript
const respuestasVF = {
    pregunta1: "verdadero",
    // Otras respuestas aquí...
};

function verificarVerdaderoFalso() {
    let puntosVF = 0;
    let totalPreguntasVF = Object.keys(respuestasVF).length;
    let resultadoVF = '';

    for (let pregunta in respuestasVF) {
        let respuestaUsuario = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (respuestaUsuario && respuestaUsuario.value === respuestasVF[pregunta]) {
            puntosVF++;
        }
    }
    document.getElementById("resultado-vf").textContent = `Has obtenido ${puntosVF} de ${totalPreguntasVF} puntos.`;
}
```

## Instalación y Uso

### Requisitos
Este proyecto es puramente estático y no requiere instalación de dependencias. Puedes abrir el archivo `index.html` en cualquier navegador moderno.

### Pasos para usar:

1. Clona el repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador.
3. ¡Comienza a practicar los ejercicios interactivos!

### Modo Noche/Día

Para alternar entre el modo noche y el modo día, usa el botón "Alternar Modo Noche/Día" ubicado en la parte superior derecha de la página. El modo seleccionado se guardará en el navegador y se mantendrá en futuras sesiones.

## Contribuciones

Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b mi-nueva-funcionalidad`.
3. Realiza los cambios necesarios y confirma tus cambios: `git commit -m 'Añadir nueva funcionalidad'`.
4. Sube tus cambios a tu repositorio remoto: `git push origin mi-nueva-funcionalidad`.
5. Envía un Pull Request explicando los cambios propuestos.

## Licencia

Este proyecto está bajo la [GPL-3.0-only](https://opensource.org/license/gpl-3-0).

