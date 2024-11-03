import db from '@/lib/dbConnect';
import { Product } from '@/types/Product';

class ProductModel {
  static async create(productData: Partial<Product>): Promise<Product> {
    const [newProduct] = await db<Product>('products').insert(productData).returning('*');
    return newProduct;
  }

  static async findById(id: number): Promise<Product | undefined> {
    return db<Product>('products').where({ id }).first();
  }

  static async update(id: number, data: Partial<Product>): Promise<Product | undefined> {
    const [updatedProduct] = await db<Product>('products').where({ id }).update(data).returning('*');
    return updatedProduct;
  }

  static async delete(id: number): Promise<void> {
    await db<Product>('products').where({ id }).del();
  }

  static async findAll(): Promise<Product[]> {
    return db<Product>('products').select('*');
  }
}

export default ProductModel;
