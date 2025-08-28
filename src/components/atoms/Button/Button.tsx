import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className,
}: ButtonProps) => {
  const buttonClassName = `
    ${styles.btn} 
    ${styles[variant]} 
    ${className || ""}
  `;
  return (
    <button type={type} onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};
