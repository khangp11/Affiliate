import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Order } from "./Order";
import Product from "./Product";

interface StaffInfo {
  status: boolean;
  surname: string;
  permissions: string[];
}

@Table({ tableName: "users" })
class User extends Model<User> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column({ type: DataType.STRING, unique: true })
  email!: string;

  @Column(DataType.STRING)
  phone!: string;

  @Column(DataType.STRING)
  house?: string;

  @Column(DataType.STRING)
  city?: string;

  @Column(DataType.STRING)
  state?: string;

  @Column(DataType.STRING)
  zipCode?: string;

  @Column(DataType.STRING)
  country?: string;

  @Column(DataType.STRING)
  image?: string;

  @Column(DataType.STRING)
  hash!: string;

  @Column(DataType.STRING)
  salt!: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isAdmin!: boolean;

  @Column(DataType.JSON)
  isStaff?: StaffInfo;

  @Column(DataType.DATE)
  emailVerified?: Date;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  createdAt!: Date;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  updatedAt!: Date;

  @Column(DataType.STRING)
  resetPasswordToken?: string;

  @Column(DataType.DATE)
  resetPasswordExpires?: Date;

  @HasMany(() => Order)
  orders!: Order[];

  @HasMany(() => Product)
  favorite!: Product[];
}
export default User;
