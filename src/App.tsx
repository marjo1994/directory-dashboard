import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Dashboard } from "./components/pages/Dashboard/Dashboard";
import { MyFiles } from "./components/pages/MyFiles/MyFiles";
import { RecentFilesPage } from "./components/pages/RecentFiles/RecentFiles";
import { SharedFiles } from "./components/pages/SharedFiles/SharedFiles";
import "../src/styles/_globals.scss";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/my-files" element={<MyFiles />} />
          <Route path="/recent-files" element={<RecentFilesPage />} />
          <Route path="/shared-files" element={<SharedFiles />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
