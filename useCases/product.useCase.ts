import { getProductsType } from "@/types/repository.type";
import { productMapper as mapper } from "@/mappers";
import { productRepository } from "@/repositories";
const getProducts = async (prop: getProductsType) => {
  const payload = mapper.toUpdateGetProductsPayload(prop);
  const res = await productRepository.getProducts(payload);
  const data = await res.json();
  return data;
};

export default {
  getProducts,
};
