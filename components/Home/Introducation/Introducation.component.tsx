import React from "react";
import styles from "./Introducation.module.scss";
import { Btn } from "@/components/Common";
interface introducationType {
  title: string;
  description: string;
}
const Introducation: React.FC<introducationType> = ({ title, description }) => {
  return (
    <div className={styles.introducation}>
      <div className={styles.introducation__wrapper}>
        <div className={styles.introducation__details}>
          <h1 className={styles.introducation__title}>{title}</h1>
          <p className={styles.introducation__description}>{description}</p>
          <figure className={styles["introducation__img-wrapper"]}>
            <img
              className={styles["introducation__img"]}
              src="/img/hero-bg.png"
              alt="landing bg"
            />
          </figure>
        </div>

        <Btn as="link" href="/products" size="md">
          See Our Products
        </Btn>
      </div>
    </div>
  );
};

export default Introducation;
