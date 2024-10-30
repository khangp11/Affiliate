import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "orders" })
export class Order extends Model<Order> {
  @Column(DataType.STRING)
  orderId!: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  orderDate!: Date;

  @Column(DataType.JSON)
  products!: any[];

  @Column(DataType.STRING)
  status!: string;

  @Column(DataType.STRING)
  paymentStatus!: string;

  @Column(DataType.JSON)
  billingInfo!: object;

  @Column(DataType.JSON)
  shippingInfo!: object;

  @Column(DataType.JSON)
  deliveryInfo!: object;

  @Column(DataType.STRING)
  paymentMethod!: string;

  @Column(DataType.STRING)
  paymentId!: string;

  @Column(DataType.FLOAT)
  totalPrice!: number;

  @Column(DataType.FLOAT)
  payAmount!: number;

  @Column(DataType.JSON)
  coupon!: object;

  @Column(DataType.STRING)
  orderStatus!: string;

  @Column(DataType.STRING)
  new!: boolean;

  @Column(DataType.JSON)
  user!: { type: string; ref: "user" }[];
}
