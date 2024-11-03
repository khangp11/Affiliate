import db from '@/lib/dbConnect';
import { Coupon } from '@/types/Coupon';

class CouponModel {
  static async create(couponData: Partial<Coupon>): Promise<Coupon> {
    const [newCoupon] = await db<Coupon>('coupons').insert(couponData).returning('*');
    return newCoupon;
  }

  static async findById(id: number): Promise<Coupon | undefined> {
    return db<Coupon>('coupons').where({ id }).first();
  }

  static async findByCode(code: string): Promise<Coupon | undefined> {
    return db<Coupon>('coupons').where({ code }).first();
  }

  static async update(id: number, data: Partial<Coupon>): Promise<Coupon | undefined> {
    const [updatedCoupon] = await db<Coupon>('coupons').where({ id }).update(data).returning('*');
    return updatedCoupon;
  }

  static async delete(id: number): Promise<void> {
    await db<Coupon>('coupons').where({ id }).del();
  }

  static async findAll(): Promise<Coupon[]> {
    return db<Coupon>('coupons').select('*');
  }
}

export default CouponModel;
