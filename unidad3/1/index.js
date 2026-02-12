// argv: arguments
// escape de caracteres
// File System
const fs = require('fs');
const os = require('os');

const command = process.argv[2];
const argument1 = process.argv[3];
const argument2 = process.argv[4];

function personalizedGreeting(name) {
  if (name) {
    console.log(`Hola, ${name}!`);
  } else {
    console.log('Hola, Mundo! Por favor la siguiente vez ingresa un nombre');
    console.log('node index.js greet Javi');
  }
}

function notes(action, content) {
  if (action === 'add') {
    if (!content) {
      console.log('Error: Por favor provea el contenido que quiere agregar.');
      console.log('Ejemplo: node index.js notes add "xxx"');
      return;
    }
    fs.appendFile('notes.txt', content + '\n', (err) => {
      if (err) {
        console.log('Error al guardar la nota:', err);
      } else {
        console.log('La nota se guardó satisfactoriamente.');
      }
    });
  } else if (action === 'list') {
    fs.readFile('notes.txt', 'utf8', (err, data) => {
      if (err) {
        console.log('ERROR:', err);
      } else {
        console.log('--- Tus Notas ---');
        console.log(data.trim());
        console.log('-----------------');
      }
    });
  } else {
    console.log("Comando no válido.  Utilice 'add' o 'list'");
  }
}

function systemInfoTool() {
  console.log('--- Información del Sistema ---');
  console.log(`Sistema Operativo: ${os.type()} ${os.platform()}`);
  console.log(`Arquitectura de CPU: ${os.arch()}`);
  const freeMemoryMB = Math.round(os.freemem() / 1024 / 1024);
  console.log(`Memoria disponible: ${freeMemoryMB} MB`);
  const uptimeHour = Math.floor(os.uptime() / 3600);
  console.log(
    `Sistema encendido ~${uptimeHour} ${uptimeHour === 1 ? 'Hora' : 'Horas'}`,
  );
  console.log('----------------------------------');
}

switch (command) {
  case 'greet':
    personalizedGreeting(argument1);
    break;
  case 'notes':
    notes(argument1, argument2);
    break;
  case 'sysinfo':
    systemInfoTool();
    break;
  default:
    console.log('Bienvenido a NodeJS\nPor favor ingresa un commando válido');
    console.log('\tnode index.js greet');
    console.log('\tnode index.js notes add "Contenido de la nota"');
    break;
}
