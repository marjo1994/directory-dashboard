import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./NavItem.module.scss";

type NavItemProps = {
  icon?: ReactNode;
  label: string;
  to: string;
};

export const NavItem = ({ label, to }: NavItemProps) => {
  return (
    <Link to={to} className={styles.navItem}>
      <div>
        <span className={styles.icon}></span>
      </div>
      <span className={styles.label}>{label}</span>
    </Link>
  );
};
