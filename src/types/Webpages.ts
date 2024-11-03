export interface Webpage {
  id?: number;
  homePage: {
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
      scopeA: { title: string; url: string; image: string[] };
      scopeB: { title: string; url: string; image: string[] };
      scopeC: { title: string; url: string; image: string[] };
      scopeD: { title: string; url: string; image: string[] };
    };
  };
  aboutPage: { content: string };
  privacyPage: { content: string };
  termsPage: { content: string };
  returnPolicyPage: { content: string };
  faqPage: { content: string };
}
