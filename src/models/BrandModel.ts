import db from '@/lib/dbConnect';
import { Brand } from '@/types/Brand';

class BrandModel {
  static async create(brandData: Partial<Brand>): Promise<Brand> {
    const [newBrand] = await db<Brand>('brands').insert(brandData).returning('*');
    return newBrand;
  }

  static async findById(id: number): Promise<Brand | undefined> {
    return db<Brand>('brands').where({ id }).first();
  }

  static async update(id: number, data: Partial<Brand>): Promise<Brand | undefined> {
    const [updatedBrand] = await db<Brand>('brands').where({ id }).update(data).returning('*');
    return updatedBrand;
  }

  static async delete(id: number): Promise<void> {
    await db<Brand>('brands').where({ id }).del();
  }

  static async findAll(): Promise<Brand[]> {
    return db<Brand>('brands').select('*');
  }
}

export default BrandModel;
