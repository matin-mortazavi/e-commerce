import { getProductType, getProductsType } from "@/types/product.type";
export default {
  getProducts: (payload: string) =>
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products${payload}`),

  getProduct: (id: number) => fetch(`/product/${id}`),

  searchProducts: (payload: string) =>
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products${payload}`),
};
