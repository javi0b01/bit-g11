import 'dotenv/config';
import express from 'express';
import connectDB from './config/db.js';
import productsRouter from './routers/products.js';

const server = express();
const PORT = process.env.PORT || 3000;

connectDB();

server.use(express.json());
server.use('/products', productsRouter);

server.get('/', (req, res) => {
  res.status(204).send();
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
