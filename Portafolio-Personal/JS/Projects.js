document.addEventListener('DOMContentLoaded', function() {
    // Función para regresar a Perfil.html
    const goBackButton = document.getElementById('go-back');
    if (goBackButton) {
        goBackButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

            // Agregar animación fade-out (si la quieres)
            document.body.classList.add('fade-out');

            // Después de 1 segundo, redirigir a Perfil.html
            setTimeout(function() {
                window.location.href = 'Perfil.html';  // Redirigir a Perfil.html
            }, 1000);  // Tiempo de espera para la animación
        });
    }
});
