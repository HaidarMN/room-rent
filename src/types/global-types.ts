import { ReactNode } from "react";

export type ButtonType = {
  variant?: "primary" | "secondary";
  outline?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
};
