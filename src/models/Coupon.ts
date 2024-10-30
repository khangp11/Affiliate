import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "coupons" })
export class Coupon extends Model<Coupon> {
  @Column({ type: DataType.STRING, unique: true })
  code!: string;

  @Column(DataType.INTEGER)
  amount!: number;

  @Column(DataType.DATE)
  active!: Date;

  @Column(DataType.DATE)
  expired!: Date;
}
