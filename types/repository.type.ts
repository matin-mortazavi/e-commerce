export interface getProductsType {
  payload: {
    offest?: Number;
    limit?: number;
    categoryId?: Number;
    price_min?: Number;
    price_max?: Number;
  };
}
export interface getProductType {
  payload: {
    id: Number;
  };
}
