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
console.log('names:', names);

const originalNames = document.getElementById('original-names');

names.forEach((name) => {
  const li = document.createElement('li');
  li.textContent = name;
  originalNames.appendChild(li);
});

/* Filtrar nombres */
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', () => {
  const searchTerm = searchInput.value.toLowerCase();
  console.log(searchTerm);
  const filteredNames = names.filter((name) => {
    return name.toLowerCase().includes(searchTerm);
  });
  console.log('filteredNames:', filteredNames);
});

/* Bucles - Ejemplos */
// for
const forLoopNames = [];
for (let i = 0; i < names.length; i++) {
  forLoopNames.push(names[i].toUpperCase());
}
console.log('forLoopNames:', forLoopNames);
// while
const whileLoopNames = [];
let j = 0;
while (j < names.length) {
  whileLoopNames.push(names[j].toLowerCase());
  j++;
}
console.log('whileLoopNames:', whileLoopNames);
// for...of
const forOfLoopNames = [];
for (name of names) {
  forOfLoopNames.push(name + ' 🙂');
}
console.log('forOfLoopNames:', forOfLoopNames);
// for...in
const forInLoopNames = [];
for (const index in names) {
  forInLoopNames.push(`😉 ${names[index]}`);
}
console.log('forInLoopNames:', forInLoopNames);

const literalObject = {
  username: 'demo',
  password: 'ABC123',
};
for (const prop in literalObject) {
  console.log('prop:', prop);
  console.log('value:', literalObject[prop]);
}
