import styles from "./Card.module.scss";
import ThreeDotsIcon from "../../../assets/three-dots-vertical.svg";
import { AvatarStack } from "../../atoms/Avatar/AvatarStack";
import type { User } from "../../../types";

type CardProps = {
  title: string;
  date: string;
  image: string;
  showMenu?: boolean;
  hasSpacing?: boolean;
  users: User[];
};

export const Card = ({
  title,
  date,
  image,
  showMenu,
  hasSpacing,
  users,
}: CardProps) => {
  return (
    <div className={styles.card}>
      {showMenu && (
        <button type="button" className={styles.card_icon}>
          <img src={ThreeDotsIcon} alt="Three dots icon" />
        </button>
      )}

      {image && (
        <div
          className={`${styles.card_fileImg} ${hasSpacing ? styles.card_imgSpacing : ""}`}
        >
          <img src={image} alt="File img" />
          <AvatarStack users={users} max={3} />
        </div>
      )}

      <h3
        className={`${styles.card_title} ${
          hasSpacing ? styles.card_titleSpacing : ""
        }`}
      >
        {title}
      </h3>
      <span className={styles.card_date}>Created: {date}</span>
    </div>
  );
};
