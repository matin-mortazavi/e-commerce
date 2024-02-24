import { Img, TextField } from "@/components/Common";
import { useDebounce } from "@/hooks";
import { productUseCase } from "@/useCases";
import styles from "./Search.module.scss";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { productItemType } from "@/types/product.type";
const ProductItem: React.FC<{ product: productItemType }> = ({ product }) => (
  <div className={styles.product}>
    <figure className={styles.product__img}>
      <Img path={product.images?.[0]} />
    </figure>
    <span className={styles.product__img}>{product.title}</span>
    <span className={styles.product__price}>{product.price}</span>
  </div>
);
const Search = () => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [isOverlayOpen, setIsOverOpen] = useState(false);

  const debouncedValue = useDebounce(value, 500);
  const onSearchValueChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") toClear();
  };
  const toClear = () => {
    setProducts([]);
    setValue("");
    setIsOverOpen(false);
  };
  const onFocus = () => {
    setIsOverOpen(true);
  };

  const onBlur = () => {
    toClear();
  };
  const fetchProducts = async () => {
    const products = await productUseCase.searchProducts(debouncedValue);

    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [debouncedValue]);

  return (
    <div className={styles.search}>
      <TextField
        value={value}
        className={styles.search__input}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onSearchValueChange}
      />
      <div
        className={clsx(styles.search__overlay, {
          [styles["search__overlay--active"]]: isOverlayOpen,
        })}
      ></div>
      {products.length && isOverlayOpen ? (
        <div className={styles.search__list}>
          {products.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
