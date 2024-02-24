import { Img } from "@/components/Common";
import React from "react";
import styles from "./TopBanners.module.scss";
interface TopBanners {
  right: string;
  left: string;
}
const TopBanners: React.FC<TopBanners> = ({ right, left }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__wrapper}>
        <figure className={styles.banner__img}>
          <Img path={right} />
        </figure>

        <figure className={styles.banner__img}>
          <Img path={left} />
        </figure>
      </div>
    </div>
  );
};

export default TopBanners;
