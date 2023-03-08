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