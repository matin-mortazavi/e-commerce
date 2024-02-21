import { getProductType, getProductsType } from "@/types/repository.type";
export default {
  getProducts: (payload: String) =>
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products${payload}`),
  getProduct: (id: getProductType) => fetch(`/product/${id}`),
};
