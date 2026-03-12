import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
    inStock: {
      type: Boolean,
    },
  },
  { versionKey: false, timestamps: true },
);

export default model('Product', productSchema);
