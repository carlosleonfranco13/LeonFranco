/*===========CARDS LINKS==========*/
var check = document.querySelector('input[type="checkbox"].languCheck');
check.addEventListener('change', cambiarIdioma);

function cambiarIdioma() {
  let id = check.checked;
  if (id == true) {
    location.href = "/en/index.html"; // redirecciona al index.html en la carpeta "en"
  } else {
    location.href = "/index.html"; // redirecciona al index.html principal
  }
}

/*============FORM==============*/
document.addEventListener('DOMContentLoaded', function() {

  // Seleccionar los elementos de la interfaz
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputMsj = document.querySelector('#mensaje');

});