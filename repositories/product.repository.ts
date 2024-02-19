import { getProductType, getProductsType } from "@/types/product.type";
export default {
  getProducts: (payload: String) =>
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products${payload}`),
  getProduct: (id: getProductType) => fetch(`/product/${id}`),
};
