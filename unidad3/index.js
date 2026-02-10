// argv: arguments
// escape de caracteres
// File System
const fs = require('fs');

const command = process.argv[2];
const argument1 = process.argv[3];
const argument2 = process.argv[4];

function saludoPersonalizado(name) {
  if (name) {
    console.log(`Hola, ${name}!`);
  } else {
    console.log('Hola, Mundo! Por favor la siguiente vez ingresa un nombre');
    console.log('node index.js saludar Javi');
  }
}

function notes(action, content) {
  console.log('action:', action);
  console.log('content:', content);
  if (action === 'agregar') {
    if (!content) {
      console.log('Error: Por favor provea el contenido que quiere agregar.');
      console.log('Ejemplo: node index.js notas agregar "xxx"');
      return;
    }
    fs.appendFile('notes.txt', content + '\n', (err) => {
      if (err) {
        console.log('Error al guardar la nota:', err);
      } else {
        console.log('La nota se guardó satisfactoriamente.');
      }
    });
  }
}

switch (command) {
  case 'saludar':
    saludoPersonalizado(argument1);
    break;
  case 'notas':
    notes(argument1, argument2);
    break;
  default:
    console.log('Bienvenido a NodeJS\nPor favor ingresa un commando válido');
    console.log('\tnode index.js saludar');
    console.log('\tnode index.js notas agregar "Contenido de la nota"');
    break;
}
