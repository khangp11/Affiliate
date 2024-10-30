import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "newsletters" })
export class Newsletter extends Model<Newsletter> {
  @Column(DataType.JSON)
  subscribers!: {
    email: string;
    date: Date;
  }[];
}
