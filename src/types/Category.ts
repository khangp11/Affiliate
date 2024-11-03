export interface Category {
  id?: number;
  categoryId: string;
  name: string;
  icon: string[];
  slug: string;
  subCategories: string[];
  topCategory: boolean;
}
