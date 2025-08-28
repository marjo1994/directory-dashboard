import { Dashboard } from "../Dashboard/Dashboard";
import { Sidebar } from "../../organisms/Sidebar/Sidebar";
import { StorageSidebar } from "../../organisms/StorageSidebar/StorageSidebar";
import styles from "./Homepage.module.scss";

export const Home = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.layout}>
        <Sidebar />
        <Dashboard />
        <StorageSidebar />
      </div>
    </div>
  );
};
