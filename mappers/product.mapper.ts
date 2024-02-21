import { getProductsType } from "@/types/repository.type";

const toUpdateGetProductsPayload = (payload: getProductsType) => {
  let queryList: any = [];
  Object.entries(payload).map(([key, value]) => {
    if (value) queryList.push(`${key}=${value}`);
  });
  const updatedPayload = `?${queryList.join("&")}`;
  return updatedPayload;
};
export default {
  toUpdateGetProductsPayload,
};
