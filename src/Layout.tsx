import type { ReactNode } from "react";
import { Sidebar } from "./components/organisms/Sidebar/Sidebar";
import { StorageSidebar } from "./components/organisms/StorageSidebar/StorageSidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="homepage">
      <div className="layout">
        <Sidebar />
        {children}
        <StorageSidebar />
      </div>
    </div>
  );
};
