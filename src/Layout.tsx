import { useState, type ReactNode } from "react";
import { Sidebar } from "./components/organisms/Sidebar/Sidebar";
import { StorageSidebar } from "./components/organisms/StorageSidebar/StorageSidebar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import "../src/styles/_globals.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="homepage">
      <header className="mobileHeader">
        <button className="hamburger" onClick={() => setIsDrawerOpen(true)}>
          <HamburgerMenuIcon />
        </button>
        <span className="title">Marjorie H.</span>
        <img className="avatar" src="" alt="Photo" />
      </header>

      <div className="layout">
        <Sidebar className="sidebarDesktop" />
        {children}
        <StorageSidebar />
      </div>

      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="backdrop" onClick={() => setIsDrawerOpen(false)} />
        <div className="panel">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
