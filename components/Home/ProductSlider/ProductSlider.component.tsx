"use client";
import {  Slider } from "@/components/Common";
import { productItemType } from "@/types/product.type";
import React from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./ProductSlider.module.scss";
import { ProductItem } from "@/components/Product";
const sliderSettings = {
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: { clickable: true },
  navigation: true,
};

interface ProductSlider {
  products: [productItemType];
  title?: string;
}
const ProductSlider: React.FC<ProductSlider> = ({
  products,
  title = "Categories",
}) => {
  return (
    <div className={styles["product-slider"]}>
      <span className={styles["product-slider__title"]}>{title}</span>
      <div className={styles["product-slider__wrapper"]}>
        <Slider settings={sliderSettings}>
          {products?.map((item, key) => (
            <SwiperSlide key={key}>
              <ProductItem product={item} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
