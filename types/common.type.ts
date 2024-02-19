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
