export interface Coupon {
  id?: number;
  code: string;
  amount: number;
  active: Date;
  expired: Date;
}
