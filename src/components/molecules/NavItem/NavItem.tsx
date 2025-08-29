import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.scss";
import ActiveIcon from "../../../assets/active-icon.svg";

type NavItemProps = {
  icon?: ReactNode;
  label: string;
  to: string;
};

export const NavItem = ({ label, to }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <img
              src={ActiveIcon}
              alt="Active Icon"
              className={styles.activeIcon}
            />
          )}
          <div>
            <span className={styles.icon}></span>
          </div>
          <span className={styles.label}>{label}</span>
        </>
      )}
    </NavLink>
  );
};
