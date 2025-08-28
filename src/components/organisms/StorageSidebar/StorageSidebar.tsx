import { Spotlight } from "../../molecules/Spotlight/Spotlight";
import { StorageCircleBar } from "../../molecules/StorageCircleBar/StorageCircleBar";
import styles from "./StorageSidebar.module.scss";

export const StorageSidebar = () => {
  const data = [
    { type: "Images", value: 200, color: "#ff9f00" },
    { type: "Videos", value: 125, color: "#689ff8" },
    { type: "Documents", value: 75, color: "#4ac29d" },
    { type: "Others", value: 50, color: "#C4C4C4" },
  ];

  return (
    <div className={styles.storageSidebar}>
      <div className={styles.header}>
        <div>
          <button type="button" className={styles.btn}></button>
          <button type="button" className={styles.btn}></button>
        </div>
        <div className={styles.user}>
          <span className={styles.name}>Name</span>
          <div className={styles.photo}></div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.contentWrapper}>
        <h2>Storage</h2>
        <StorageCircleBar data={data} total={500} />
        <Spotlight />
      </div>
    </div>
  );
};
