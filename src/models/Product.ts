import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "products" })
class Product extends Model<Product> {
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  date!: Date;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  slug!: string;

  @Column(DataType.STRING)
  productId!: string;

  @Column(DataType.STRING)
  unit!: string;

  @Column(DataType.STRING)
  unitValue!: string;

  @Column(DataType.FLOAT)
  price!: number;

  @Column(DataType.FLOAT)
  discount!: number;

  @Column(DataType.STRING)
  description!: string;

  @Column(DataType.STRING)
  shortDescription!: string;

  @Column(DataType.STRING)
  type!: string;

  @Column(DataType.JSON)
  image!: string[];

  @Column(DataType.JSON)
  gallery!: string[];

  @Column(DataType.JSON)
  categories!: string[];

  @Column(DataType.JSON)
  subcategories!: string[];

  @Column(DataType.STRING)
  brand!: string;

  @Column(DataType.STRING)
  currency!: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  trending!: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  new!: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  bestSelling!: boolean;

  @Column(DataType.INTEGER)
  quantity!: number;

  @Column(DataType.STRING)
  sku!: string;

  @Column(DataType.JSON)
  colors!: string[];

  @Column(DataType.JSON)
  attributes!: string[];

  @Column(DataType.JSON)
  additionalAttributes!: string[];

  @Column(DataType.JSON)
  taxes!: object;

  @Column(DataType.JSON)
  tags!: string[];

  @Column(DataType.JSON)
  shipping!: object;

  @Column(DataType.JSON)
  sellerInfo!: object;

  @Column(DataType.JSON)
  spec!: object;

  @Column(DataType.STRING)
  status!: string;

  @Column(DataType.STRING)
  featureStatus!: string;

  @Column(DataType.JSON)
  video!: string[];

  @Column(DataType.STRING)
  productStatus!: string;

  @Column(DataType.STRING)
  review!: string;

  @Column(DataType.JSON)
  variant!: object;

  @Column(DataType.JSON)
  promo!: object;
}
export default Product;
