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
    console.log(e.target.parentElement);

    if(e.target.value.trim() === '') {
      mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
    }else{
      console.log('Continúa con el formulario');
    }
  }

  function mostrarAlerta(mensaje, referencia) {
    // Generar alerta en el HTML
    const alertaError = document.createElement('P');
    alertaError.textContent = mensaje;
    alertaError.classList.add('alertaError');

    // Mostrar la Alerta en el html(Form)
    referencia.appendChild(alertaError);
  }
});