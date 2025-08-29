import styles from "./FileItem.module.scss";
import threeDotsHorizontal from "../../../assets/three-dots-horizontal.svg";
type FileItemProps = {
  name: string;
  members: number;
  date: string;
};

export const FileItem = ({ name, members, date }: FileItemProps) => {
  return (
    <div className={styles.fileItem}>
      <div className={styles.nameSection}>
        <span className={styles.iconWrapper}></span>
        <span>{name}</span>
      </div>

      <div className={styles.members}>{members} members</div>
      <div className={styles.date}>{date}</div>
      <button className={styles.moreBtn}>
        <img src={threeDotsHorizontal} alt="Three Dots Button" />
      </button>
    </div>
  );
};
