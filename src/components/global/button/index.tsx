import type { ButtonType } from "../../../types/global-type";

const Button = ({
  variant = "primary",
  outline = false,
  disabled = false,
  rounded,
  children,
  className,
  onClick,
}: ButtonType) => {
  const checkClass = () => {
    let className: string =
      "px-4 py-2 text-sm font-medium h-12 w-full border transition-all ";

    className += `${variant === "primary" ? "border-primary" : "border-secondary"} ${rounded ? "rounded-full" : "rounded-md"} `;

    if (outline) {
      className += `bg-transparent ${
        variant === "primary" ? "text-primary" : "text-secondary"
      } ${disabled ? "opacity-50 cursor-not-allowed" : `${variant === "primary" ? "hover:bg-primary" : "hover:bg-secondary"} hover:text-white`}`;
    } else {
      className += `${variant === "primary" ? "bg-primary" : "bg-secondary"} ${disabled ? "opacity-50 cursor-not-allowed text-white" : "text-white hover:brightness-90"}`;
    }

    return className;
  };

  return (
    <button
      className={`${checkClass()} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
