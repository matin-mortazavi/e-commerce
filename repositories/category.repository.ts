export default {
  getCategories: () => fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`),
};
