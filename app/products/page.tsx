import React from "react";
import styles from "./page.module.scss";
import { productUseCase } from "@/useCases";
import { getProductsType } from "@/types/repository.type";
const Products = async ({ searchParams }: getProductsType) => {
  const products = await productUseCase.getProducts(searchParams);

  return (
    <section className={styles.products}>
      <div className={styles["products__products-list"]}>
        {products.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>

      <div className={styles["products__filters"]}></div>
    </section>
  );
};

export default Products;
