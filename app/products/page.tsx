import React from "react";
import styles from "./page.module.scss";
import { productUseCase } from "@/useCases";
import { getProductsType, productItemType } from "@/types/product.type";
import { ProductItem } from "@/components/Product";
const Products = async ({ searchParams }: getProductsType) => {
  const products = await productUseCase.getProducts(searchParams);

  return (
    <section className={styles.products}>
      <div className={styles["products__products-list"]}>
        {products.map((product: productItemType) => (
          <ProductItem product={product} />
        ))}
      </div>

      <div className={styles["products__filters"]}></div>
    </section>
  );
};

export default Products;
