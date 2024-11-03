export interface ShippingCharge {
  id?: number;
  area: {
    name: string;
    price: number;
  }[];
  internationalCost: number;
}
