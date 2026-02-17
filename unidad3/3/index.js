const express = require('express');
const app = express();
const port = 3000;

// habilitar JSON
app.use(express.json());

/*
HTTP: Métodos, Códigos de estado
CRUD: Create Read Update Delete
*/

// productos
const products = [
  {
    id: 1,
    name: 'portátil',
    category: 'electrónica',
    price: 1500.5,
    inStock: true,
  },
  {
    id: 2,
    name: 'teclado',
    category: 'electrónica',
    price: 100.0,
    inStock: false,
  },
  {
    id: 3,
    name: 'mouse',
    category: 'electrónica',
    price: 25.25,
    inStock: true,
  },
];
console.log('ANTES productos:', products);

// crear producto
app.post('/productos', (request, response) => {
  const { name, category, price, inStock } = request.body;

  if (!name || !category || price === undefined || inStock === undefined) {
    return response.status(400).json({ message: 'Falta campo obligatorio' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price,
    inStock,
  };
  products.push(newProduct);
  console.log('DESPUÉS productos:', products);
  response.status(201).json(newProduct);
});

// leer todos los productos
app.get('/productos', (request, response) => {
  response.status(200).json(products);
});

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto: ${port}`);
});
