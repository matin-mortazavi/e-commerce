export interface ImgComponentType {
  path: String;
  headers?: {};
  alt?: String;
  fallbackFile?: String;
  figureStyle?: {};
  onLoadEnd?: () => {};
}
