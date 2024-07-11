const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario

    // Aquí podrías incluir el código para enviar los datos del formulario si fuera necesario

    // Mostramos el mensaje de enviado
    const mensajeEnviado = document.getElementById('mensaje-enviado');
    mensajeEnviado.style.display = 'block';

    // Opcional: Limpiar el formulario después de enviarlo
    form.reset();
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('miFormulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Aquí puedes agregar tu lógica para enviar los datos si lo necesitas

        // Limpiar los campos del formulario
        form.reset();

        // Mostrar un mensaje de enviado
        const mensaje = document.createElement('div');
        mensaje.className = 'alert alert-success mt-3';
        mensaje.textContent = 'Mensaje enviado correctamente.';
        form.insertAdjacentElement('afterend', mensaje);

        // Quitar el mensaje después de unos segundos
        setTimeout(function () {
            mensaje.remove();
        }, 3000); // 3000 milisegundos = 3 segundos
    });
});
