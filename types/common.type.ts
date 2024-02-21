import { LegacyRef, ReactNode, RefCallback } from "react";

export interface ImgComponentType {
  path: String;
  headers?: {};
  alt?: String;
  fallbackFile?: String;
  figureStyle?: {};
  onLoadEnd?: () => {};
}
export interface BtnComponentType {
  as?: string;
  type?: string;
  variant?: string;
  color?: string;
  size?: string;
  danger?: boolean;
  block?: boolean;
  children: React.ReactNode;
  className?: {};
  href?: string;
  startIcon?: string;
  endIcon?: string;
  loading?: boolean;
  elevation?: boolean;
  isComponentDisable?: boolean;
}
export interface checkBoxFilterType {
  checkedItem: string | number | null;
  name: string;
  onCheckBoxChange: () => {
    checked: boolean;
    name: string;
    filterName: string;
  };
}

export interface sliderFilterType {
  name?: string;
  maxValue: number;
  minValue?: number;
  onSliderChange?: (value: number[]) => void;
  values: number[];
}

export interface textFieldType {
  textarea : boolean,
  type : string,
  name : string,
  label? : string,
  error? : string,
  noError? : boolean,
  noLabel? : boolean,
  startIcon? :  ReactNode ,
  endIcon ? :  ReactNode ,
  loading ? : boolean,
  className? : {},
  ref?: LegacyRef<any> | undefined,
  rest : any
}
