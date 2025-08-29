import { Logo } from "../../atoms/Logo/Logo";
import { CreateNewPopover } from "../../molecules/CreateNewPopover/CreateNewPopover";
import { NavItem } from "../../molecules/NavItem/NavItem";
import styles from "./Sidebar.module.scss";

export const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.sidebar} ${className}`}>
      <Logo />
      <div className={styles.nav}>
        <NavItem to="/" label="Home" />
        <NavItem to="/my-files" label="My Files" />
        <NavItem to="/recent-files" label="Recent Files" />
        <NavItem to="/shared-files" label="Shared Files" />
        <NavItem to="/file-request" label="File Request" />
        <NavItem to="/trash" label="Trash" />
      </div>
      <div className={styles.createNew}>
        <CreateNewPopover />
      </div>
    </div>
  );
};
