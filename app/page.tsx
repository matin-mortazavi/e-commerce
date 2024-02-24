import { Introducation } from "@/components/Home";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <main className={styles.main}>
      <Introducation
        title="e-commerce"
        description="lorem lorem dasdasdadadd"
      />
    </main>
  );
}
