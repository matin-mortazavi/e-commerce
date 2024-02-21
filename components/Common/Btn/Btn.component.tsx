"use client";
import { BtnComponentType } from "@/types/common.type";
import React, { useCallback, useMemo } from "react";
import styles from "./Btn.module.scss";
import { NextLink } from "..";
const Btn: React.FC<BtnComponentType> = ({
  as = "button",
  type = "button",
  variant = "contained",
  color = "primary",
  size = "xm",
  danger,
  block,
  children,
  className,
  href,
  startIcon,
  endIcon,
  loading,
  elevation,
  isComponentDisable = false,
  ...rest
}) => {
  const createClassName = useMemo(
    () =>
      [
        styles.btn,
        variant == "contained" &&
          color == "primary" &&
          styles["btn__contained-primary"],
        variant == "contained" &&
          color == "secondary" &&
          styles["btn__contained-secondary"],
        variant == "contained" &&
          size == "md" &&
          styles["btn__contained-primary--md"],
        variant == "text" && color == "inherit" && styles["btn__text--inherit"],
        variant == "text" && color == "primary" && styles["btn__text-primary"],
        variant == "text" &&
          color == "secondary" &&
          styles["btn__text-secondary"],
        variant == "outlined" &&
          color == "primary" &&
          styles["btn__outlined-primary"],
        variant == "outlined" &&
          color == "secondary" &&
          styles["btn__outlined-secondary"],
        block && styles.btn__block,
        danger && styles.btn__danger,
        elevation && styles.btn__elevation,
        className,
      ].join(" "),
    [variant, block, danger, elevation, className, color]
  );
  const createChild = useCallback(
    () =>
      loading ? (
        <Loading size={24} color="inherit" />
      ) : (
        <>
          {startIcon && (
            <div className={styles["btn__icon-start"]}>{startIcon}</div>
          )}
          <span className={styles["btn__children"]}>{children}</span>
          {endIcon && <div className={styles["btn__icon-end"]}>{endIcon}</div>}
        </>
      ),
    [loading, startIcon, endIcon, children]
  );
  return (
    <>
      {as === "link" ? (
        <NextLink {...rest} href={href}>
          <button className={createClassName} type={type} {...rest}>
            {createChild()}
          </button>
        </NextLink>
      ) : (
        <button className={createClassName} type={type} {...rest}>
          {createChild()}
        </button>
      )}
    </>
  );
};

export default Btn;
