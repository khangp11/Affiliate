import db from '@/lib/dbConnect';
import { Category } from '@/types/Category';

class CategoryModel {
  static async create(categoryData: Partial<Category>): Promise<Category> {
    const [newCategory] = await db<Category>('categories').insert(categoryData).returning('*');
    return newCategory;
  }

  static async findById(id: number): Promise<Category | undefined> {
    return db<Category>('categories').where({ id }).first();
  }

  static async update(id: number, data: Partial<Category>): Promise<Category | undefined> {
    const [updatedCategory] = await db<Category>('categories').where({ id }).update(data).returning('*');
    return updatedCategory;
  }

  static async delete(id: number): Promise<void> {
    await db<Category>('categories').where({ id }).del();
  }

  static async findAll(): Promise<Category[]> {
    return db<Category>('categories').select('*');
  }
}

export default CategoryModel;
