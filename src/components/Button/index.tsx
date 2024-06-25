import { ButtonHTMLAttributes } from "react";
import "./styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
}
// children: React.ReactNode;
// onClick?: () => void;
// onClick?(): void

export const Button = ({ children, onClick, secondary }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={secondary ? "btn btn-secondary" : "btn"}
    >
      {children}
    </button>
  );
};
