import type { StorageItem } from "../../../types";
import { SpaceItem } from "../../atoms/SpaceItem/SpaceItem";
import styles from "./StorageCircleBar.module.scss";

type StorageCircleBarProps = {
  data: StorageItem[];
  total: number;
};

export const StorageCircleBar = ({ data, total }: StorageCircleBarProps) => {
  let current = 0;
  const stops = data
    .map((item) => {
      const start = (current / total) * 100;
      current += item.value;
      const end = (current / total) * 100;
      return `${item.color} ${start.toFixed(2)}% ${end.toFixed(2)}%`;
    })
    .join(" ,");

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.circleBar}
        style={{ background: `conic-gradient(${stops})` }}
      >
        <div className={styles.innerCircle}>
          <span className={styles.percentage}>
            {Math.round(
              (data.reduce((acc, i) => acc + i.value, 0) / total) * 100
            )}
            %
          </span>
          <span>Used</span>
        </div>
      </div>
      <p>420.2 GB of 500 GB used</p>
      <div className={styles.storageList}>
        {data.map((item) => {
          return (
            <SpaceItem type={item.type} value={item.value} color={item.color} />
          );
        })}
      </div>
    </div>
  );
};
