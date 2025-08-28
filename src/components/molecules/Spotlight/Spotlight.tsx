import { Button } from "../../atoms/Button/Button";
import styles from "./Spotlight.module.scss";

export const Spotlight = () => {
  return (
    <div className={styles.spotlight}>
      <div className={styles.image}></div>
      <h3 className={styles.title}>Buy more space now</h3>
      <p className={styles.subtitle}>Upgrade to cloud premium</p>
      <Button className={styles.ctaBtn}>Upgrade Account!</Button>
    </div>
  );
};
