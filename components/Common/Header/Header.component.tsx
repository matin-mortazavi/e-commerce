import { Search } from "@/components/Product";
import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <Search />
      <span>logo</span>
    </div>
  );
};

export default Header;
