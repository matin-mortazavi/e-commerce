import { sliderFilterType } from "@/types/common.type";
import Slider from "rc-slider";
import React from "react";
import "rc-slider/assets/index.css";
import styles from "./SliderFilter.module.scss";
const sliderStyles = {
  railStyle: {
    backgroundColor: "#ccc",
    height: 5,
    borderRadius: 8,
  },
  trackStyle: { backgroundColor: "#3fa796", height: 5 },
  handleStyle: {
    opacity: 1,
    backgroundColor: "#ffff",
    borderColor: "#ccc",
    height: 18,
    width: 18,
    borrom: "0px",
  },
};
const SliderFilter: React.FC<sliderFilterType> = ({
  name,
  maxValue,
  minValue,
  onSliderChange = () => {},
  values,
}) => {
  return (
    <div className={styles.slider}>
      <Slider
        min={0}
        reverse
        max={maxValue}
        onChange={onSliderChange}
        value={values}
        range
        {...sliderStyles}
      />
    </div>
  );
};

export default SliderFilter;
