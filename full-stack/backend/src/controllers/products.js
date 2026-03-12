import productModel from '../models/products.js';

const productsController = {
  create: async (req, res) => {
    try {
      const { name, category, price, inStock } = req.body;
      const newProduct = new productModel({
        name,
        category,
        price,
        inStock,
      });
      await newProduct.save();
      res.status(201).json({ message: 'Producto creado' });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el producto' });
    }
  },
  readAll: async (req, res) => {
    try {
      const allProducts = await productModel.find();
      res.status(201).json({ data: allProducts });
    } catch (error) {
      res.status(500).json({ error: 'Error al leer todos los productos' });
    }
  },
  read: async (req, res) => {
    try {
      const { id } = req.params;
      const productFound = await productModel.findById(id);
      if (!productFound) {
        res.status(404).json({ message: 'Producto no encontrado' });
      } else {
        res.status(201).json({ data: productFound });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al leer el producto' });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, category, price, inStock } = req.body;
      const productUpdated = await productModel.findByIdAndUpdate(id, {
        name,
        category,
        price,
        inStock,
      });
      if (!productUpdated) {
        res.status(404).json({ message: 'Producto no encontrado' });
      } else {
        res.status(201).json({ message: 'Producto actualizado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al leer el producto' });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const productDeleted = await productModel.findByIdAndDelete(id);
      if (!productDeleted) {
        res.status(404).json({ message: 'Producto no encontrado' });
      } else {
        res.status(201).json({ message: 'Producto eliminado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el producto' });
    }
  },
};

export default productsController;
