import React from "react";
import styles from "./page.module.scss";
import { productUseCase } from "@/useCases";
import { getProductsType, productItemType } from "@/types/product.type";
import { Filters, ProductItem } from "@/components/Product";
import categoryUseCase from "@/useCases/category.useCase";
const Products = async ({ searchParams }: getProductsType) => {
  const { products, highestPrice } = await productUseCase.getProducts(
    searchParams
  );
  const categories = await categoryUseCase.getCategories();

  return (
    <section className={styles.products}>
      <div className={styles["products__products-list"]}>
        {products.map((product: productItemType) => (
          <ProductItem product={product} />
        ))}
      </div>

      <div className={styles["products__filters"]}>
        <Filters highestPrice={highestPrice} categories={categories} />
      </div>
    </section>
  );
};

export default Products;
