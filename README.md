# JS-Panel-Estudiantil-DOM
Práctica de JavaScript Vanilla: manipulación dinámica de tablas en el DOM, cálculo de promedios y Modo Oscuro.

# Panel Estudiantil Reactivo 🎓🌙

Este es el segundo mini-proyecto de mi ruta de aprendizaje en **JavaScript Vanilla**, enfocado en la manipulación avanzada del DOM (Document Object Model) y la gestión de tablas dinámicas.

## 📌 ¿Qué hace este proyecto?
Es un panel de control que simula el registro de notas de alumnos. Permite agregar estudiantes a una tabla, evaluar automáticamente si están aprobados o desaprobados, calcular el promedio general del curso en tiempo real y alternar la interfaz a Modo Oscuro.

## 🛠️ Conceptos y Tecnologías aplicadas:
* **Variables CSS (`:root`):** Implementación de "Dark Mode" utilizando variables de CSS y `classList.toggle()` en JavaScript para cambiar toda la paleta de colores con un solo clic.
* **Manipulación de Tablas (DOM):** Uso de los métodos nativos `insertRow()` e `insertCell()` para generar filas dinámicamente en respuesta a la interacción del usuario.
* **Lógica Matemática Estricta:** Uso de `parseInt()` para conversión de tipos de datos, validación de rangos (notas del 1 al 10), y cálculo de promedios actualizados en tiempo real mediante bucles `for`.
* **Creación y Destrucción de Nodos:** Generación de botones "Eliminar" con `document.createElement()` que tienen la capacidad de auto-destruir la fila a la que pertenecen usando el método `.remove()`.
* **Experiencia de Usuario (UX):** Limpieza automática de formularios con `.reset()` y alertas visuales de campos incompletos o inválidos.

---
*Desarrollado como práctica intensiva para dominar la interacción entre HTML, CSS y JS puro.*