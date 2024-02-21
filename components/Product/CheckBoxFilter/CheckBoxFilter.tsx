import React, { useMemo } from "react";
import styles from "./CheckBoxFilter.module.scss";
import { CheckBox } from "@/components/Common";
import { checkBoxFilterType } from "@/types/common.type";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
const CheckBoxFilter = ({ filterName, options, onFilterChange }) => {
  const onCheckBoxChange = ({ checked, name }) =>
    onFilterChange({ checked, name, filterName });
  const searchParams = useSearchParams();
  const checkedItem = useMemo(
    () => searchParams.get(filterName),
    [searchParams]
  );
  return (
    <div className={styles["check-box-filter"]}>
      <span className={styles["check-box-filter__title"]}>{filterName}</span>
      <ul className={styles["check-box-filter__list"]}>
        {options.map((item: checkBoxFilterType) => (
          <li
            className={clsx(styles["check-box-filter__item"], {
              [styles["check-box-filter__item--active"]]:
                checkedItem === item?.name,
            })}
          >
            <CheckBox
              checkedItem={checkedItem}
              name={item?.name}
              onCheckBoxChange={onCheckBoxChange}
            />

            <span>{item?.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckBoxFilter;
