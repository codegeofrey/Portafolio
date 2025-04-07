document.addEventListener('DOMContentLoaded', function() {
    // Función para redirigir a skills.html
    document.getElementById('go-to-skills').addEventListener('click', function(event) {
        event.preventDefault();  // Prevenir el comportamiento por defecto del enlace

        // Agregar animación fade-out
        document.body.classList.add('fade-out');

        // Después de 1 segundo, redirigir a skills.html
        setTimeout(function() {
            window.location.href = 'skills.html';  // Redirigir a skills.html
        }, 1000);
    });

    // Función para redirigir a Projects.html
    document.getElementById('go-to-experience').addEventListener('click', function(event) {
        event.preventDefault();  // Prevenir el comportamiento por defecto del enlace

        // Agregar animación fade-out
        document.body.classList.add('fade-out');

        // Después de 1 segundo, redirigir a Projects.html
        setTimeout(function() {
            window.location.href = 'Projects.html';  // Redirigir a Projects.html
        }, 1000);
    });
});
