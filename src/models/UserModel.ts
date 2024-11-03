import db from '@/lib/dbConnect';
import { User } from '@/types/User';

class UserModel {
  static async create(userData: Partial<User>): Promise<User> {
    const [newUser] = await db<User>('users').insert(userData).returning('*');
    return newUser;
  }

  static async findById(id: number): Promise<User | undefined> {
    return db<User>('users').where({ id }).first();
  }

  static async update(id: number, data: Partial<User>): Promise<User | undefined> {
    const [updatedUser] = await db<User>('users').where({ id }).update(data).returning('*');
    return updatedUser;
  }

  static async delete(id: number): Promise<void> {
    await db<User>('users').where({ id }).del();
  }

  static async findAll(): Promise<User[]> {
    return db<User>('users').select('*');
  }

  static async findByEmail(email: string): Promise<User | undefined> {
    return db<User>('users').where({ email }).first();
  }
}

export default UserModel;
