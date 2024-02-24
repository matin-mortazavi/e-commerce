import {
  CategorySlider,
  CustomBanner,
  Introducation,
  ProductSlider,
  TopBanners,
} from "@/components/Home";
import styles from "./page.module.scss";
import { categoryUseCase, productUseCase } from "@/useCases";

export default async function Home() {
  const discountedCategory = await categoryUseCase.getDiscountedCategories();
  const discountedProducts = await productUseCase.getDiscountedProducts();

  return (
    <main className={styles.main}>
      <Introducation
        title="e-commerce"
        description="lorem lorem dasdasdadadd"
      />

      <CategorySlider
        title="Discounted Categories"
        categories={discountedCategory}
      />

      <TopBanners />

      <ProductSlider
        products={discountedProducts}
        title="Discounted Products"
      />

      <CustomBanner link="/products" title="start jurny" />
      <CustomBanner link="/products" title="view our blog" />
    </main>
  );
}
