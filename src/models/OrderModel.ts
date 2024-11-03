import db from '@/lib/dbConnect';
import { Order } from '@/types/Order';

class OrderModel {
  static async create(orderData: Partial<Order>): Promise<Order> {
    const [newOrder] = await db<Order>('orders').insert(orderData).returning('*');
    return newOrder;
  }

  static async findById(id: number): Promise<Order | undefined> {
    return db<Order>('orders').where({ id }).first();
  }

  static async update(id: number, data: Partial<Order>): Promise<Order | undefined> {
    const [updatedOrder] = await db<Order>('orders').where({ id }).update(data).returning('*');
    return updatedOrder;
  }

  static async delete(id: number): Promise<void> {
    await db<Order>('orders').where({ id }).del();
  }

  static async findAll(): Promise<Order[]> {
    return db<Order>('orders').select('*');
  }
}

export default OrderModel;
