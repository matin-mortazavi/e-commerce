import { getProductsType } from "@/types/product.type";
import { productMapper as mapper } from "@/mappers";
import { productRepository } from "@/repositories";
const getProducts = async (prop: getProductsType) => {
  try {
    const payload = mapper.toUpdateGetProductsPayload(prop);
    const res = await productRepository.getProducts(payload);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error");
  }
};

export default {
  getProducts,
};
