import { SquareIcon } from "../../atoms/SquareIcon/SquareIcon";
import styles from "./Searchbar.module.scss";

export const SearchBar = () => {
  return (
    <div className={styles.search}>
      <SquareIcon className={styles.icon} />
      <input className={styles.input} placeholder="Search" type="text"></input>
    </div>
  );
};
