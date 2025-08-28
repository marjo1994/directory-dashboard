import styles from "./SquareIcon.module.scss";

export const SquareIcon = ({ className }: { className: string }) => {
  return <span className={`${styles.square} ${className}`}></span>;
};
