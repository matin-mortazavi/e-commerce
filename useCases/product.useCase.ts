import { getProductsType } from "@/types/product.type";
import { productMapper as mapper } from "@/mappers";
import { productRepository } from "@/repositories";
const getProducts = async (prop: getProductsType) => {
  try {
    const payload = mapper.toUpdateGetProductsPayload(prop);
    const res = await productRepository.getProducts(payload);
    const products = await res.json();
    let prices = [];

    products.map((item) => {
      prices.push(item.price);
    });
    const highestPrice = Math.max(...prices);

    return { products, highestPrice };
  } catch (error) {
    console.error("error");
  }
};

export default {
  getProducts,
};
