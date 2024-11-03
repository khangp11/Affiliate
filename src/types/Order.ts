export interface Order {
  id?: number;
  orderId: string;
  orderDate: Date;
  products: any[];
  status: string;
  paymentStatus: string;
  billingInfo: object;
  shippingInfo: object;
  deliveryInfo: object;
  paymentMethod: string;
  paymentId: string;
  totalPrice: number;
  payAmount: number;
  coupon: object;
  orderStatus: string;
  new: boolean;
  user: { type: string; ref: "user" }[];
}
