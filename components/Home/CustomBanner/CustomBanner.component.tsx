import { Btn, Img } from "@/components/Common";
import React from "react";
import styles from "./CustomBanner.module.scss";
interface customBanner {
  title: string;
  image: string;
  link: string;
}
const CustomBanner: React.FC<customBanner> = ({ title, link, image }) => {
  return (
    <figure className={styles.banner}>
      <Img path={image} />
      <Btn as="link" href={link} className={styles.banner__btn}>
        {title}
      </Btn>
    </figure>
  );
};

export default CustomBanner;
