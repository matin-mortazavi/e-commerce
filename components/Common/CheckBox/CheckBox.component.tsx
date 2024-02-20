import React, { useMemo } from "react";
import styles from "./CheckBox.module.scss";
const CheckBox = ({ name, checkedItem, onCheckBoxChange }) => {
  const onChange = (e) => onCheckBoxChange({ checked: e.target.checked, name });
  const isChecked = useMemo(() => checkedItem === name, [checkedItem, name]);
  return (
    <input
      className={styles["check-box"]}
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
    />
  );
};

export default CheckBox;
