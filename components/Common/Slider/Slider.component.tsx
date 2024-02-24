"use client"
import { Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Thumbs,
  Autoplay,
} from "swiper/modules";

import "swiper/css/bundle";
import "swiper/css";
import React, { ReactElement } from "react";

interface sliderType {
  settings: {};
  children: ReactElement;
}
const Slider: React.FC<sliderType> = ({ settings, children }) => {
  const settingConfigs = {
    modules: [
      Navigation,
      Pagination,
      Scrollbar,
      A11y,
      Keyboard,
      Thumbs,
      Autoplay,
    ],
    pagination: { clickable: true },
    navigation: true,
    loop: true,
    ...settings,
  };

  return <Swiper {...settingConfigs}>{children}</Swiper>;
};

export default Slider;
