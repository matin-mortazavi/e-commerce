import { forwardRef, useCallback, useMemo } from "react";

import { Loading } from "@/components/Common";
import styles from "./TextField.module.scss";

const TextField = forwardRef(
  (
    {
      textarea = false,
      type = "text",
      name = "",
      label = "",
      error = "",
      noError,
      noLabel,
      startIcon,
      endIcon,
      loading,
      className,
      ...rest
    },
    ref,
  ) => {
    const Label = useCallback(
      () =>
        !noLabel && (
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
        ),
      [label, noLabel, name],
    );

    const StartIcon = useCallback(
      () => (startIcon && <div className={styles["text-field__start-icon"]}>{startIcon}</div>) || "",
      [startIcon],
    );

    const EndIcon = useMemo(
      () => (endIcon && <div className={styles["text-field__end-icon"]}>{endIcon}</div>) || "",
      [endIcon],
    );

    const LoadingComponent = useCallback(
      () =>
        (loading && (
          <div className={styles.loading}>
            <Loading size={20} />
          </div>
        )) ||
        "",
      [loading],
    );

    const Hint = useCallback(() => (error && <div className={styles.hint}>{error}</div>) || "", [error]);

    return (
      <div className={[styles["text-field"], className].join(" ")}>
        <Label />
        <div
          className={[
            styles["text-field__container"],
            error && styles["text-field__container-error"],
            textarea && styles["text-field__textarea"],
          ].join(" ")}
        >
          {StartIcon()}
          {!textarea && (
            <input
              className={styles["text-field__input"]}
              type={type}
              name={name}
              autoComplete="off"
              ref={ref}
              {...rest}
            />
          )}
          {textarea && (
            <textarea
              className={styles["text-field__input"]}
              name={name}
              autoComplete="off"
              ref={ref}
              {...rest}
            />
          )}
          {EndIcon}
          <LoadingComponent />
        </div>
        <Hint />
      </div>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;

