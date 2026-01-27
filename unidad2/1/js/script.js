// Esperar a que el documento HTML haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
  // Creando referencias a elementos del DOM
  const taskInput = document.getElementById('task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');
  const clockDisplay = document.getElementById('clock');
  const dateDisplay = document.getElementById('date');
  const welcomeMessage = document.getElementById('welcome-message');
  const categoriesDisplay = document.getElementById('unique-categories');

  let tasks = [];

  /* Temas: Fechas e Intervalos */
  function updateClock() {
    const now = new Date();
    clockDisplay.textContent = now.toLocaleTimeString();
    dateDisplay.textContent = now.toLocaleDateString();
  }
  setInterval(updateClock, 1000);

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (text === '') {
      alert('Por favor ingrese una tarea');
      return;
    }

    const newTask = {
      text: text,
    };

    tasks.push(newTask);

    taskInput.value = '';
    saveTasks();
  }

  // Escuchar el evento "click" del botón
  addTaskBtn.addEventListener('click', addTask);

  // Escuchar cuando la tecla presionada es "Enter"
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
