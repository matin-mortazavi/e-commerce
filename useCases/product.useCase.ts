import { getProductsType } from "@/types/product.type";
import { productMapper as mapper } from "@/mappers";
import { productRepository } from "@/repositories";
const getProducts = async (prop: getProductsType) => {
  try {
    const payload = mapper.toUpdateProductsPayload(prop);
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

const searchProducts = async (title: string) => {

  try {
    const payload = mapper.toUpdateProductsPayload({ title });

    const res = await productRepository.searchProducts(payload);
    const products = await res.json();

    return products;
  } catch (error) {
    console.error("error");
  }
};

export default {
  getProducts,
  searchProducts,
};
