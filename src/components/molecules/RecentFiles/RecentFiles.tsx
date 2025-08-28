import { FileItem } from "../../atoms/FileItem/FileItem";
import styles from "./RecentFiles.module.scss";

export const RecentFiles = () => {
  const files = [
    { id: 1, name: "Travel Landing Page", members: 5, date: "Mar 8, 2020" },
    { id: 2, name: "True Photos", members: 12, date: "Aug 12, 2025" },
    { id: 3, name: "Dashboard Structure", members: 10, date: "Mar 9, 2020" },
  ];

  return (
    <div className={styles.recentFiles}>
      <div className={styles.header}>
        <div>Name</div>
        <div>Members</div>
        <div>Last Modified</div>
        <div></div>
      </div>

      {files.map((file) => (
        <FileItem key={file.id} {...file} />
      ))}
    </div>
  );
};
