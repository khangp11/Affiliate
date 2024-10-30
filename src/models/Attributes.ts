import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "attributes" })
export class Attribute extends Model<Attribute> {
  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.JSON)
  values!: string[];
}
