import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { MyFiles } from "../../pages/MyFiles/MyFiles";
import { RecentFilesPage } from "../../pages/RecentFiles/RecentFiles";
import { SharedFiles } from "../../pages/SharedFiles/SharedFiles";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/my-files" element={<MyFiles />} />
        <Route path="/recent-files" element={<RecentFilesPage />} />
        <Route path="/shared-files" element={<SharedFiles />} />
      </Routes>
    </main>
  );
};
