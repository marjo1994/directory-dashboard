import type { AvatarStackProps } from "../../../types";
import styles from "./AvatarStack.module.scss";

export const AvatarStack = ({ users, max = 2 }: AvatarStackProps) => {
  const usersToShow = max ? users.slice(0, max) : users;
  const excessUsers = max ? users.length - max : 0;
  return (
    <div className={styles.avatarStack}>
      {usersToShow.map((user) => (
        <div
          key={user.id}
          className={styles.avatarStack_item}
          style={{
            borderColor: user.borderColor ? user.borderColor : "#bec0c8",
          }}
        ></div>
      ))}
      {excessUsers > 0 && (
        <div className={styles.avatarStack_item}>+{excessUsers}</div>
      )}
    </div>
  );
};
