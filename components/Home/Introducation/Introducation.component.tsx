import React from "react";
import styles from "./Introducation.module.scss";

interface introducationType {
  title: string;
  description: string;
}
const Introducation: React.FC<introducationType> = ({ title, description }) => {
  return (
    <div className={styles.introducation}>
      <h1 className={styles.introducation__title}>{title}</h1>
      <p className={styles.introducation__description}>{description}</p>
    </div>
  );
};

export default Introducation;
