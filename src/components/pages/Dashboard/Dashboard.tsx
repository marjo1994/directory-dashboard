import { Card } from "../../molecules/Card/Card";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { RecentFiles } from "../../molecules/RecentFiles/RecentFiles";

import styles from "./Dashboard.module.scss";

import fileIcon from "../../../assets/fileIcon.svg";
import fileIcon2 from "../../../assets/fileIcon2.svg";

export const Dashboard = () => {
  const usersDemoColors = [
    { id: "1", borderColor: "#4ac29d" },
    { id: "2", borderColor: "#ff6860" },
  ];

  const usersDemoColors2 = [
    { id: "1", borderColor: "#4ac29d" },
    { id: "2", borderColor: "#ff6860" },
    { id: "2", borderColor: "#ff9f00" },
  ];

  const users = [{ id: "1" }, { id: "2" }];

  const users2 = [
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
  ];
  return (
    <div className={styles.dashboard}>
      <SearchBar />
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Recently Used</h2>
        </div>
        <div className={styles.threeColumns}>
          <Card
            title="App Project"
            date="02.02.2025"
            showMenu
            image={fileIcon}
            hasSpacing
            users={users}
          />
          <Card
            title="Project: fitbit"
            date="28.02.2020"
            showMenu
            image={fileIcon}
            hasSpacing
            users={users}
          />
          <Card
            title="App Project"
            date="04.03.2020"
            showMenu
            image={fileIcon}
            hasSpacing
            users={users2}
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Recently Files</h2>
          <button type="button" className={styles.sectionBtn}>
            View All
          </button>
        </div>
        <RecentFiles />
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Share with me</h2>
          <button type="button" className={styles.sectionBtn}>
            View All
          </button>
        </div>
        <div className={styles.threeColumns}>
          <Card
            title="App Project"
            date="02.02.2025"
            image={fileIcon2}
            users={usersDemoColors}
          />
          <Card
            title="Project: fitbit"
            date="28.02.2020"
            image={fileIcon2}
            users={usersDemoColors2}
          />
          <Card
            title="App Project"
            date="04.03.2020"
            image={fileIcon2}
            users={usersDemoColors}
          />
        </div>
      </section>
    </div>
  );
};
