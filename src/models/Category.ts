import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "categories" })
class Category extends Model<Category> {
  @Column(DataType.STRING)
  categoryId!: string;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.JSON)
  icon!: string[];

  @Column(DataType.STRING)
  slug!: string;

  @Column(DataType.JSON)
  subCategories!: string[];

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  topCategory!: boolean;
}
export default Category;
