// Esperar por el documento HTML hasta que esté completamente cargado para iniciar con este script.
document.addEventListener('DOMContentLoaded', () => {
  // Imprimir mensajes en consola
  console.log('DOM listo!');

  // seleccionar elemento por su id
  const mainSection = document.getElementById('main-section');
  console.log('sectión principal:', mainSection);

  // seleccionar elementos por atributo name
  const paramsName = document.getElementsByName('para-name');
  console.log('paramsName:', paramsName);

  // seleccionar una lista de elementos de una misma etiqueta
  const allButtons = document.getElementsByTagName('button');
  console.log('allButtons:', allButtons);

  // onclick desde JavaScript
  const jsOnclickBtn = document.getElementById('js-onclick-btn');
  jsOnclickBtn.onclick = () => {
    alert('Hiciste click en el botón click JS onclick');
    console.log('Se hizo click sobre el botón JS onclick');
  };

  /* VARIABLES var, let, const */
  var viejaManera = 'Soy una variable con VAR';
  console.log(viejaManera);
  let nuevaManera = 'Soy una variable con LET';
  console.log(nuevaManera);

  viejaManera = 'VVV';
  nuevaManera = 'LLL';

  console.log(viejaManera);
  console.log(nuevaManera);

  const variableTipoConstante = 'Soy una CONSTANTE';
  console.log(variableTipoConstante);

  /* INTERACTIVIDAD */
  const $promptBtn = document.getElementById('prompt-btn');
  $promptBtn.onclick = () => {
    const nombreUsuario = prompt('Por favor ingrese su nombre');
    if (nombreUsuario) {
      // concatenación
      alert('Hola, ' + nombreUsuario + '!');
      console.log('Hola, ' + nombreUsuario + '!');
      // interpolación de variables
      console.log(`Hola, ${nombreUsuario}!`);
    } else {
      alert('Hola, desconocido!');
    }
  };

  const confirmBtn = document.getElementById('confirm-btn');
  confirmBtn.onclick = function () {
    const confirmacionUsuario = confirm('¿Quiere proceder?');
    if (confirmacionUsuario) {
      document.writeln('Si, proceder!');
    } else {
      document.writeln('No proceder.');
    }
  };

  const openWindowBtn = document.getElementById('open-window-btn');
  openWindowBtn.onclick = () => {
    window.open('https://bitinstitute.online/', '_blank');
  };

  /* INYECTAR HTML */
  const innerHTMLsection = document.getElementById('innerHTML-section');
  innerHTMLsection.innerHTML = '<h4>Hola, soy nuevo HTML</h4><div>yo tb.</div>';
});
