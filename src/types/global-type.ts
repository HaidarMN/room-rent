import { ReactElement, ReactNode } from "react";

export type ButtonType = {
  variant?: "primary" | "secondary";
  outline?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  children: ReactNode | ReactElement;
  className?: string;
  onClick?: () => void;
};

type InputType = {
  name: string;
  label?: string;
  placeholder?: string;
  validationText?: string;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: string;
  rounded?: boolean;
};

export type InputTextType = InputType & {
  initialValue?: string;
  updateValue?: (e: string) => void;
};

export type InputSelectType = InputType & {
  options: Array<{
    value: string | number;
    label: string;
  }>;
  multi?: boolean;
  clearable?: boolean;
  isLoading?: boolean;
  menuPlacement?: "top" | "bottom";
  initialValue?: string | number | Array<string | number>;
  updateValue?: (e: string | number | Array<string | number>) => void;
};
