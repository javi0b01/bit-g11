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

  // Temas: Arreglos y local storage
  let tasks = [];

  /* Temas: Fechas e Intervalos */
  function updateClock() {
    const now = new Date();
    clockDisplay.textContent = now.toLocaleTimeString();
    dateDisplay.textContent = now.toLocaleDateString();
  }
  setInterval(updateClock, 1000);

  // Tema: JSON.stringify convierte nuestro arreglo en string 'JSON'
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Función para mostrar mis tareas en la UI
  function renderTasks() {
    // Limpiar el contenido previo
    taskList.innerHTML = '';
    console.log(tasks);
    // Tema: ciclos ('foreach')
    // Crear un elemento de lista por cada elemento en el arreglo
    tasks.forEach((task, index) => {
      // Crear un elemento de lista
      const li = document.createElement('li');
      // Agregar una clase de css
      li.className = 'task-item';

      // Si la tarea está marcada como completada
      if (task.completed) {
        li.classList.add('completed');
      }

      const taskText = document.createElement('span');
      taskText.textContent = `${task.text} (Agregada: ${task.dateAdded})`;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';

      li.addEventListener('click', () => {
        toggleTaskCompletion(index);
      });

      deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        deleteTask(index);
      });
      // Agregar contenido al elemento de lista
      li.appendChild(taskText);
      li.appendChild(deleteBtn);
      // Agregar contenido a la lista
      taskList.appendChild(li);
    });
  }

  function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    // Guardar
    saveTasks();
    // Mostrar
    renderTasks();
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    // Guardar
    saveTasks();
    // Mostrar
    renderTasks();
  }

  // Temas: funciones, condicionales, objetos, arreglos, métodos integrados
  // Esta función agrega nueva tarea al arreglo de tareas
  function addTask() {
    // Tema: métodos integrados
    const text = taskInput.value.trim();
    // Condicionales
    if (text === '') {
      alert('Por favor ingrese una tarea');
      return;
    }
    // Tema: Objetos, Fechas
    const newTask = {
      text: text,
      completed: false,
      dateAdded: new Date().toLocaleDateString(),
    };
    // Agregar elementos al arreglo
    tasks.push(newTask);
    // Limpiar el input
    taskInput.value = '';
    // Guardar
    saveTasks();
    // Mostrar
    renderTasks();
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
