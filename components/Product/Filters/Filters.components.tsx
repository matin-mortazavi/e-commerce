"use client";

import React from "react";
import styles from "./Filters.module.scss";
import { CategoryFilter } from "@/components/Product";
import { useRouter } from "next/router";
import { useNextRouter } from "@/hooks";
import { searchParamsService } from "@/services";
import CheckBoxFilter from "../CheckBoxFilter/CheckBoxFilter";
const Filters = async ({ categories }) => {
  const router = useNextRouter();

  const onFilterChange = ({ checked, name, filterName }) => {
    if (checked) {
      const params = searchParamsService.toUpdateSearchParam(filterName, name);
      router.replace(`/products?${params}`);
    } else {
      const params = searchParamsService.toRemoveSearchParam(filterName);
      router.replace(`/products?${params}`);
    }
  };
  return (
    <div>
      <CheckBoxFilter
        onFilterChange={onFilterChange}
        options={categories}
        filterName="category"
      />
    </div>
  );
};

export default Filters;
