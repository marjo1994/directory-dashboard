import type { StorageItem } from "../../../types";
import styles from "./SpaceItem.module.scss";

export const SpaceItem = ({ type, value, color }: StorageItem) => {
  return (
    <>
      <div className={styles.spaceItem}>
        <div className={styles.type}>
          <span
            className={styles.iconWrapper}
            style={{ backgroundColor: color }}
          ></span>
          <div className={styles.textWrapper}>
            <span className={styles.typeDocument}>{type}</span>
            <span className={styles.files}>720 files</span>
          </div>
        </div>
        <div className={styles.value}>{value} GB</div>
      </div>
      <div className={styles.divider}></div>
    </>
  );
};
