/*============FORM==============*/
document.addEventListener('DOMContentLoaded', function() {

  // Seleccionar los elementos de la interfaz
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputMsj = document.querySelector('#mensaje');  


  // Asignar eventos
  inputName.addEventListener('blur', validar);

  inputEmail.addEventListener('blur', validar);

  inputMsj.addEventListener('blur', validar);

  function validar(e) {
    if(e.target.value.trim() === '') {
      mostrarAlerta();
    }else{
      console.log('Continúa con el formulario');
    }
  }

  function mostrarAlerta() {
    const alertaError = document.createElement('P');
    alertaError.textContent = 'Error! Form vacío';
    console.log(alertaError);
  }
});