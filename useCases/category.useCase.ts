import { categoryRepository } from "@/repositories";

const getCategories = async () => {
  try {
    const res = await categoryRepository.getCategories();
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getDiscountedCategories = async () => {
  try {
    const res = await categoryRepository.getCategories();
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
export default {
  getCategories,
  getDiscountedCategories,
};
