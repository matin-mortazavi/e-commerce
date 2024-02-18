import { getProductType, getProductsType } from "@/types/repository.type";
export default {
  getProducts: (payload: getProductsType) => fetch(`/products${payload}`),
  getProduct: (id: getProductType) => fetch(`/product/${id}`),
};
