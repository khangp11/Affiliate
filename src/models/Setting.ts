import { Table, Column, Model, DataType, Default } from "sequelize-typescript";

@Table({ tableName: "settings" })
class Settings extends Model<Settings> {
  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  title!: string;

  @Column(DataType.STRING)
  address!: string;

  @Column(DataType.STRING)
  shortAddress!: string;

  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  description!: string;

  @Column(DataType.STRING)
  phoneHeader!: string;

  @Column(DataType.STRING)
  phoneFooter!: string;

  @Column(DataType.STRING)
  copyright!: string;

  @Column(DataType.JSON)
  logo!: string[];

  @Column(DataType.JSON)
  favicon!: string[];

  @Column(DataType.JSON)
  gatewayImage!: string[];

  @Column(DataType.STRING)
  headerCustomScript!: string;

  @Column(DataType.STRING)
  footerCustomScript!: string;

  @Column({ type: DataType.STRING, defaultValue: "en" })
  language!: string;

  @Column(DataType.JSON)
  footerBanner!: {
    security: { title: string; description: string };
    support: { title: string; description: string };
    delivery: { title: string; description: string };
  };

  @Column(DataType.JSON)
  seo!: {
    title: string;
    description: string;
    keyword: string;
    image: string[];
  };

  @Column(DataType.JSON)
  social!: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
    pinterest: string;
  };

  @Column(DataType.JSON)
  currency!: {
    name: { type: string; default: "USD" };
    symbol: { type: string; default: "$" };
    exchangeRate: { type: number; default: 1 };
  };

  @Column(DataType.JSON)
  color!: {
    primary: string;
    primary_hover: string;
    secondary: string;
    body_gray: string;
    body_gray_contrast: string;
    primary_contrast: string;
    primary_hover_contrast: string;
    secondary_contrast: string;
  };

  @Column(DataType.JSON)
  script!: {
    googleSiteVerificationId: string;
    facebookAppId: string;
    googleAnalyticsId: string;
    facebookPixelId: string;
    messengerPageId: string;
  };

  @Column(DataType.JSON)
  paymentGateway!: {
    cod: { type: boolean; default: true };
    paypal: { type: boolean; default: false };
    stripe: { type: boolean; default: false };
    sslCommerz: { type: boolean; default: false };
  };

  @Column(DataType.JSON)
  login!: {
    facebook: { type: boolean; default: false };
    google: { type: boolean; default: false };
  };

  @Column(DataType.JSON)
  security!: {
    loginForPurchase: { type: boolean; default: false };
  };
}
export default Settings;
