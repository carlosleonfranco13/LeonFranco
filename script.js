/*============FORM==============*/
document.addEventListener('DOMContentLoaded', function() {

  // Seleccionar los elementos de la interfaz
  const form = document.querySelector('#form');
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputMsj = document.querySelector('#mensaje');  


  // Asignar eventos
  inputName.addEventListener('blur', validar);

  inputEmail.addEventListener('blur', validar);

  inputMsj.addEventListener('blur', validar);

  function validar(e) {
    if(e.target.value.trim() === '') {
      mostrarAlerta(`El campo ${e.target.name} es obligatorio`, e.target.parentElement);
      return;
    }

    if(e.target.id === 'email' && !validarEmail(e.target.value)) {
      mostrarAlerta('El email no es válido', e.target.parentElement);
      return;
    }

    limpiarAlerta(e.target.parentElement);
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    // Generar alerta en el HTML
    const alertaError = document.createElement('P');
    alertaError.textContent = mensaje;
    alertaError.classList.add('alertaError');

    // Mostrar la Alerta en el html(Form)
    referencia.appendChild(alertaError);
  }

  function limpiarAlerta(referencia) {
    // Comprueba si ya existe una alerta
    const alerta = referencia.querySelector('.alertaError');
    if(alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }
});