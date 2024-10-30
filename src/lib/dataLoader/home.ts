import { knex } from "knex";
import Brand from "@/models/Brand"; // Nếu cần sử dụng mô hình này
import CategoryModel from "@/models/Category"; // Nếu cần sử dụng mô hình này
import ProductModel from "@/models/Product"; // Nếu cần sử dụng mô hình này
import SettingsModel from "@/models/Setting"; // Nếu cần sử dụng mô hình này
import PageModel from "@/models/Webpages"; // Nếu cần sử dụng mô hình này
import dbConnect from "@/lib/dbConnect";

// Định nghĩa kiểu cho sản phẩm
interface ProductItem {
  name: string;
  slug: string;
  image: string;
  unit: string;
  unitValue: number;
  price: number;
  discount: number;
  type: string;
  variants: any; // Thay đổi kiểu này nếu biết cấu trúc variants
  quantity: number;
  date: Date;
  review: any; // Thay đổi kiểu này nếu biết cấu trúc review
}

// Định nghĩa kiểu cho kết quả trả về của hàm
interface HomePageData {
  success: boolean;
  category: Array<{ name: string; slug: string; icon: string }>;
  additional: any; // Có thể là kiểu cụ thể nếu biết cấu trúc
  trending: ProductItem[];
  newProduct: ProductItem[];
  bestSelling: ProductItem[];
  brand: Array<any>; // Thay đổi kiểu này nếu biết cấu trúc brand
  settings: any; // Có thể là kiểu cụ thể nếu biết cấu trúc
}

export default async function homePageData(
  type?: string,
  query?: any
): Promise<HomePageData> {
  try {
    await dbConnect();

    const category = await knex("categories")
      .select("name", "slug", "icon")
      .where({ topCategory: true });

    const trending = await knex("products")
      .select<ProductItem[]>(
        "name",
        "slug",
        "image",
        "unit",
        "unitValue",
        "price",
        "discount",
        "type",
        "variants",
        "quantity",
        "date",
        "review"
      )
      .where({ trending: true });

    const newProduct = await knex("products")
      .select<ProductItem[]>(
        "name",
        "slug",
        "image",
        "unit",
        "unitValue",
        "price",
        "discount",
        "type",
        "variants",
        "quantity",
        "date",
        "review"
      )
      .where({ new: true });

    const brand = await knex("brands")
      .select("*")
      .where({ topBrand: true });

    const bestSelling = await knex("products")
      .select<ProductItem[]>(
        "name",
        "slug",
        "image",
        "unit",
        "unitValue",
        "price",
        "discount",
        "type",
        "variants",
        "quantity",
        "date",
        "review"
      )
      .where({ bestSelling: true });

    const page = await knex("webpages")
      .select("homePage")
      .first();

    const settings = await knex("settings")
      .select("*")
      .first();

    return {
      success: true,
      category,
      additional: page,
      trending,
      newProduct,
      bestSelling,
      brand,
      settings,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      category: [],
      additional: {},
      trending: [],
      newProduct: [],
      bestSelling: [],
      brand: [],
      settings: {},
    };
  }
}
