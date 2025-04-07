document.addEventListener('DOMContentLoaded', function() {
    //  para regresar a Perfil.html
    const goBackButton = document.getElementById('go-back');
    if (goBackButton) {
        goBackButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace

            // Agregar animación fade-out (si la quieres)
            document.body.classList.add('fade-out');

            //  redirigir a Perfil.html
            setTimeout(function() {
                window.location.href = 'index.html';  // Redirigir a Perfil.html
            }, 1000);  
        });
    }
});
