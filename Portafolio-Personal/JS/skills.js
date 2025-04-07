document.addEventListener('DOMContentLoaded', function() {
    // para regresar a Perfil.html
    const goBackButton = document.getElementById('go-back');
    if (goBackButton) {
        goBackButton.addEventListener('click', function(event) {
            event.preventDefault(); //quitar el comportamiento prederterminado

            // Agregar animación fade-out 
            document.body.classList.add('fade-out');

            // para redirigir a Perfil.html
            setTimeout(function() {
                window.location.href = 'index.html';  // Redirigir a Perfil.html
            }, 1000);  // Tiempo de espera para la animación
        });
    }
});
