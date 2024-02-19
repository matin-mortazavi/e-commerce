import { productItemType } from "@/types/product.type";
import React from "react";
import styles from "./ProductItem.module.scss";
import { Btn, Img } from "@/components/Common";
import { toUpdateImageUrl } from "@/utils";
const ProductItem: React.FC<{ product: productItemType }> = ({ product }) => {
  console.log(product?.images?.[0]);

  return (
    <div className={styles.product}>
      <figure className={styles["product__img"]}>
        <Img path={product?.images?.[0]} />
      </figure>
      <div className={styles["product__details"]}>
        <h3 className={styles["product__title"]}>{product?.title}</h3>
        <span className={styles["product__price"]}>{product?.price}</span>
        <p className={styles["product__description"]}>{product?.description}</p>
      </div>
      <Btn className={styles["product__btn"]}>Add To Cart</Btn>
    </div>
  );
};

export default ProductItem;
