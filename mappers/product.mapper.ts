import { getProductsType } from "@/types/product.type";

const toUpdateGetProductsPayload = (payload: getProductsType) => {
  let queryList: any = [];
  Object.entries(payload).map(([key, value]) => {
    if (value) queryList.push(`${key}=${value}`);
  });
  const updatedPayload = `?offset=0&limit=12&${queryList.join("&")}`; //i had to do this , because the other products have no images
  return updatedPayload;
};
export default {
  toUpdateGetProductsPayload,
};
