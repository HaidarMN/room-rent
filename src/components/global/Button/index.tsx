import type { ButtonType } from "../../../types/global-type";

const Button = ({
  variant = "primary",
  outline = false,
  disabled = false,
  children,
  onClick,
}: ButtonType) => {
  const checkClass = () => {
    let className: string =
      "px-4 py-2 rounded-md font-medium border transition-all ";

    className += `border-${variant} `;

    if (outline) {
      className += `bg-transparent ${
        variant === "primary" ? "text-primary" : "text-secondary"
      } ${disabled ? "opacity-50 cursor-not-allowed" : `hover:bg-${variant} hover:text-white`}`;
    } else {
      className += `bg-${variant} ${disabled ? "opacity-50 cursor-not-allowed text-white" : "text-white hover:brightness-90"}`;
    }

    return className;
  };

  return (
    <button className={checkClass()} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
