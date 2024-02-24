import { CategorySlider, Introducation, TopBanners } from "@/components/Home";
import styles from "./page.module.scss";
import { categoryUseCase } from "@/useCases";

export default async function Home() {
  const discountedCategory = await categoryUseCase.getDiscountedCategories();


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
    </main>
  );
}
