const names = [
  'Lester',
  'Adiel',
  'Mario',
  'Natalia',
  'Carlos',
  'Hector',
  'Johan',
  'Armando',
  'Alejandro',
  'Camilo',
];

const originalNames = document.getElementById('original-names');

names.forEach((name) => {
  const li = document.createElement('li');
  li.textContent = name;
  originalNames.appendChild(li);
});
