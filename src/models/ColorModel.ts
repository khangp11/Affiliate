
import db from '@/lib/dbConnect';
import { Color } from '@/types/Color';

class ColorModel {
  static async create(colorData: Partial<Color>): Promise<Color> {
    const [newColor] = await db<Color>('colors').insert(colorData).returning('*');
    return newColor;
  }

  static async findById(id: number): Promise<Color | undefined> {
    return db<Color>('colors').where({ id }).first();
  }

  static async update(id: number, data: Partial<Color>): Promise<Color | undefined> {
    const [updatedColor] = await db<Color>('colors').where({ id }).update(data).returning('*');
    return updatedColor;
  }

  static async delete(id: number): Promise<void> {
    await db<Color>('colors').where({ id }).del();
  }

  static async findAll(): Promise<Color[]> {
    return db<Color>('colors').select('*');
  }
}

export default ColorModel;
