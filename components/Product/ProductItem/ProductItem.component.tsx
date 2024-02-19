import { productItemType } from "@/types/product.type";
import React from "react";
import styles from "./ProductItem.module.scss";
import { Img } from "@/components/Common";
import { toUpdateImageUrl } from "@/utils";
const ProductItem: React.FC<{ product: productItemType }> = ({ product }) => {
  console.log(product?.images?.[0]);

  return (
    <div className={styles.product}>
      <figure className={styles["product__img"]}>
        <Img path={product?.images?.[0]} />
        <h3 className={styles["product__title"]}>{product?.title}</h3>
        <span className={styles["product__price"]}>{product?.price}</span>
        <p className={styles["product__description"]}>{product?.description}</p>
      </figure>
    </div>
  );
};

export default ProductItem;
