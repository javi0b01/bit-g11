/* Referencias a elementos del DOM */
// constantes
const $guessInput = document.getElementById('guessInput');
const $guessButton = document.getElementById('guessButton');
const $message = document.getElementById('message');
const $restartButton = document.getElementById('restartButton');
// variables
let secretNumber;
let attempts;

/* Escuchar eventos */
// Cuando carga completa de la página para iniciar el juego
document.addEventListener('DOMContentLoaded', initializeGame);
// Cuando el usuario haga click en el botón de adivinar
$guessButton.addEventListener('click', checkGuess);
// Cuando el usuario haga click en el botón de jugar de nuevo
$restartButton.addEventListener('click', initializeGame);

/* Funciones */
// inicializar el juego
function initializeGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  $message.textContent = '';
  $guessInput.value = '';
}
// verificar número del usuario
function checkGuess() {
  const userGuess = parseInt($guessInput.value);

  // NaN: Not-a-Number
  if (isNaN(userGuess)) {
    $message.textContent = 'Solo se aceptan números entre 1 y 100';
    $message.style.color = 'red';
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    $message.textContent = 'Debes ingresar un número entre 1 y 100';
    $message.style.color = 'red';
    return;
  }

  attempts++;
  if (userGuess === secretNumber) {
    const text = attempts === 1 ? 'intento' : 'intentos';
    $message.textContent = `¡Felicitaciones! Adivinaste el número secreto "${secretNumber}" en ${attempts} ${text}.`;
    $message.style.color = 'green';
  } else if (userGuess < secretNumber) {
    $message.textContent =
      'Demasiado bajo, intenta de nuevo. Intentos: ' + attempts;
    $message.style.color = 'orange';
  } else {
    $message.textContent =
      'Demasiado alto, intenta de nuevo. Intentos: ' + attempts;
    $message.style.color = 'orangered';
  }
}
