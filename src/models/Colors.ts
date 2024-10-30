import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "colors" })
export class Color extends Model<Color> {
  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  value!: string;
}
