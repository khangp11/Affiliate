export interface Settings {
  id?: number;
  name: string;
  title: string;
  address: string;
  shortAddress: string;
  email: string;
  description: string;
  phoneHeader: string;
  phoneFooter: string;
  copyright: string;
  logo: string[];
  favicon: string[];
  gatewayImage: string[];
  headerCustomScript: string;
  footerCustomScript: string;
  language: string;
  footerBanner: {
    security: { title: string; description: string };
    support: { title: string; description: string };
    delivery: { title: string; description: string };
  };
  seo: {
    title: string;
    description: string;
    keyword: string;
    image: string[];
  };
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
    pinterest: string;
  };
  currency: {
    name: string;
    symbol: string;
    exchangeRate: number;
  };
  color: {
    primary: string;
    primary_hover: string;
    secondary: string;
    body_gray: string;
    body_gray_contrast: string;
    primary_contrast: string;
    primary_hover_contrast: string;
    secondary_contrast: string;
  };
  script: {
    googleSiteVerificationId: string;
    facebookAppId: string;
    googleAnalyticsId: string;
    facebookPixelId: string;
    messengerPageId: string;
  };
  paymentGateway: {
    cod: boolean;
    paypal: boolean;
    stripe: boolean;
    sslCommerz: boolean;
  };
  login: {
    facebook: boolean;
    google: boolean;
  };
  security: {
    loginForPurchase: boolean;
  };
}
