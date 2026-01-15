document.addEventListener('DOMContentLoaded', () => {
  /* CICLOS, loops, iteraciones */
  // contadores
  // for
  for (let i = 0; i <= 5; i++) {
    console.log('for...valor de i:', i);
  }
  // while
  let j = 0;
  while (j <= 5) {
    console.log('while...valor de j:', j);
    j++;
  }
  // centinelas
  let x = false;
  while (!x) {
    console.log('while - valor de x:', x);
    x = true;
  }
  // do while
  let y = true;
  do {
    console.log('do...while - valor de y:', y);
    y = false;
  } while (y);

  /* OPERADOR TERNARIO  */
  console.log('--- OPERADOR TERNARIO ---');
  const sesionIniciada = false;
  const mensaje = sesionIniciada ? 'Bienvenido' : 'Por favor inicie sesión';
  console.log('mensaje:', mensaje);

  /* TIPO DE DATO PRIMITIVOS */
  console.log('--- TIPO DE DATO PRIMITIVOS ---');
  let dato; // undefined
  dato = 'texto'; // string
  dato = 10; // number
  dato = true; // boolean

  /* TIPO DE DATO NO PRIMITIVOS */
  // array
  dato = ['hugo', 'paco', 'luis'];
  console.log('dato:', dato);

  for (let index = 0; index < dato.length; index++) {
    const elemento = dato[index];
    console.log('elemento:', elemento);
  }
});
