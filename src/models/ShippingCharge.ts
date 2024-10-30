import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "shipping_charges" })
export class ShippingCharge extends Model<ShippingCharge> {
  @Column(DataType.JSON)
  area!: {
    name: string;
    price: number;
  }[];

  @Column(DataType.FLOAT)
  internationalCost!: number;
}
export default ShippingCharge;
