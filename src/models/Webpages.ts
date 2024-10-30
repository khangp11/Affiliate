import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "webpages" })
class Webpage extends Model<Webpage> {
  @Column(DataType.JSON)
  homePage!: {
    carousel: {
      background: string[];
      carouselData: string[];
    };
    banner: {
      title: string;
      subTitle: string;
      description: string;
      url: string;
      image: string[];
    };
    collection: {
      scopeA: {
        title: string;
        url: string;
        image: string[];
      };
      scopeB: {
        title: string;
        url: string;
        image: string[];
      };
      scopeC: {
        title: string;
        url: string;
        image: string[];
      };
      scopeD: {
        title: string;
        url: string;
        image: string[];
      };
    };
  };

  @Column(DataType.JSON)
  aboutPage!: {
    content: string;
  };

  @Column(DataType.JSON)
  privacyPage!: {
    content: string;
  };

  @Column(DataType.JSON)
  termsPage!: {
    content: string;
  };

  @Column(DataType.JSON)
  returnPolicyPage!: {
    content: string;
  };

  @Column(DataType.JSON)
  faqPage!: {
    content: string;
  };
}
export default Webpage;
