import { useState, ChangeEvent } from "react";

import { Icon } from "@iconify/react/dist/iconify.js";

import { InputTextType } from "../../../types/global-type";

const InputText = ({
  name,
  label,
  placeholder,
  validationText,
  error,
  required,
  disabled,
  className,
  icon,
  rounded,
  initialValue,
  updateValue,
}: InputTextType) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setInputValue(val);

    if (updateValue) {
      updateValue(val);
    }
  };

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <strong className="text-red-600">*</strong>}
        </label>
      )}

      <div className="flex flex-row-reverse items-center">
        <input
          type="text"
          name={name}
          id={name}
          className={`input-form peer ${icon && "rounded-l-none border-l-0 !px-2 focus:border-l-0"} ${rounded ? "rounded-full" : "rounded-md"} ${error && "input-error"} ${disabled && "input-disabled"} ${className}`}
          placeholder={placeholder}
          disabled={disabled}
          value={inputValue}
          onChange={onChangeInput}
        />

        {icon && (
          <div
            className={`input-icon bg-white peer-focus:border-r-0 peer-focus:border-black ${rounded ? "rounded-full" : "rounded-md"} ${error && "input-error"} ${disabled && "input-disabled"}`}
          >
            <Icon icon={icon} />
          </div>
        )}
      </div>

      {validationText && (
        <span
          className={`text-xs ${error ? "text-red-600" : "text-neutral-500"}`}
        >
          {validationText}
        </span>
      )}
    </div>
  );
};

export default InputText;
