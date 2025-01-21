import { ChangeEvent, ReactNode } from "react";

export type ButtonType = {
  variant?: "primary" | "secondary";
  outline?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

export type InputType = {
  name: string;
  label?: string;
  placeholder?: string;
  validationText?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  updateValue?: (e: ChangeEvent<HTMLInputElement>) => void;
};
