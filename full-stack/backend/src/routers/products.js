import { Router } from 'express';
import productsController from '../controllers/products.js';

const productsRouter = Router();

productsRouter.post('/', productsController.create);
productsRouter.get('/', productsController.readAll);
productsRouter.get('/:id', productsController.read);
productsRouter.put('/:id', productsController.update);
productsRouter.delete('/:id', productsController.delete);

export default productsRouter;
