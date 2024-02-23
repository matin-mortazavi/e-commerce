import { TextField } from "@/components/Common";
import { useDebounce } from "@/hooks";
import { productUseCase } from "@/useCases";
import styles from "./Search.module.scss";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

const Search = () => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [isOverlayOpen, setIsOverOpen] = useState(false);

  const debouncedValue = useDebounce(value, 500);
  const onSearchValueChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setProducts([]);
    }
  };

  const onFocus = () => {
    setIsOverOpen(true);
  };

  const onBlur = () => {
    setIsOverOpen(false);
    setValue("");
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
    </div>
  );
};

export default Search;
