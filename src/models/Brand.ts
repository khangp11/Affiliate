import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "brands" })
class Brand extends Model<Brand> {
  @Column(DataType.STRING)
  brandId!: string;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.JSON)
  image!: string[];

  @Column(DataType.STRING)
  slug!: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  topBrand!: boolean;
}
export default Brand;
