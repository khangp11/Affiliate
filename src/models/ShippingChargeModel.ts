import db from '@/lib/dbConnect';
import { ShippingCharge } from '@/types/ShippingCharge';

class ShippingChargeModel {
  static async create(shippingData: Partial<ShippingCharge>): Promise<ShippingCharge> {
    const [newShippingCharge] = await db<ShippingCharge>('shipping_charges').insert(shippingData).returning('*');
    return newShippingCharge;
  }

  static async findById(id: number): Promise<ShippingCharge | undefined> {
    return db<ShippingCharge>('shipping_charges').where({ id }).first();
  }

  static async update(id: number, data: Partial<ShippingCharge>): Promise<ShippingCharge | undefined> {
    const [updatedShippingCharge] = await db<ShippingCharge>('shipping_charges').where({ id }).update(data).returning('*');
    return updatedShippingCharge;
  }

  static async delete(id: number): Promise<void> {
    await db<ShippingCharge>('shipping_charges').where({ id }).del();
  }

  static async findAll(): Promise<ShippingCharge[]> {
    return db<ShippingCharge>('shipping_charges').select('*');
  }
}

export default ShippingChargeModel;
