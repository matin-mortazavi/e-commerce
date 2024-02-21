"use client";

import React, { useEffect, useState } from "react";
import styles from "./Filters.module.scss";
import { CategoryFilter, SliderFilter } from "@/components/Product";
import { useRouter } from "next/router";
import { useNextRouter } from "@/hooks";
import { searchParamsService } from "@/services";
import CheckBoxFilter from "../CheckBoxFilter/CheckBoxFilter";
const Filters = ({ categories, highestPrice }) => {
  const router = useNextRouter();
  const [maxPrice, setMaxPrice] = useState(highestPrice);
  const [filterPriceValues, setFilterPriceValues] = useState([0, 0]);
  const onPriceFilterChange = (value) =>
    setFilterPriceValues([value[0], value[1]]);

  const onFilterChange = ({ checked, name, filterName }) => {
    if (checked) {
      const params = searchParamsService.toUpdateSearchParam([
        { key: filterName, value: name },
      ]);
      router.replace(`/products?${params}`);
    } else {
      const params = searchParamsService.toRemoveSearchParam(filterName);
      router.replace(`/products?${params}`);
    }
  };

  useEffect(() => {
    if (filterPriceValues[1]) {
      let params = searchParamsService.toUpdateSearchParam([
        { key: "price_min", value: filterPriceValues[0] },
        { key: "price_max", value: filterPriceValues[1] },
      ]);

      router.replace(`/products?${params}`);
    }
  }, [filterPriceValues]);
  useEffect(() => {
    if (maxPrice < highestPrice) setMaxPrice(highestPrice);
  }, [highestPrice]);

  return (
    <>
      <div>
        <CheckBoxFilter
          onFilterChange={onFilterChange}
          options={categories}
          filterName="category"
        />
      </div>
      <SliderFilter
        minValue={0}
        maxValue={maxPrice}
        onSliderChange={onPriceFilterChange}
        values={filterPriceValues}
      />
    </>
  );
};

export default Filters;
