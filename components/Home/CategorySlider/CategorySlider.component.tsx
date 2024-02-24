"use client";
import { Img, NextLink, Slider } from "@/components/Common";
import { categoryItemType } from "@/types/category.type";
import React from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./CategorySlider.module.scss";
const sliderSettings = {
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: { clickable: true },
  navigation: true,
};

const CategoryItem: React.FC<categoryItemType> = ({ category }) => (
  <div className={styles.category}>
    <figure className={styles.category__img}>
      <Img path={category.image} />
    </figure>
    <div className={styles.category__details}>
      <span className={styles.category__title}>{category.name}</span>
      <NextLink href={`/product?category=${category.name}`} target="_blank">
        <span>Show Products </span>
      </NextLink>
    </div>
  </div>
);
const CategorySlider = ({ categories }) => {
  console.log();

  return (
    <div className={styles["category-slider"]}>
      <div className={styles["category-slider__wrapper"]}>
        <Slider settings={sliderSettings}>
          {categories?.map((item, key) => (
            <SwiperSlide key={key}>
              <CategoryItem category={item} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
