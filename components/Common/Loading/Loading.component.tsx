import styles from "./Loading.module.scss";

export default function Loading({ size, color }) {
  const getSize = () => size && { width: size, height: size };
  const getColor = () => color && { color };

  return (
    <div className={styles.loading} style={{ ...getSize(), ...getColor() }}>
      <svg className={styles.loading__svg} viewBox="22 22 44 44">
        <circle
          className={styles["loading__svg-circle"]}
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
        ></circle>
      </svg>
    </div>
  );
}
