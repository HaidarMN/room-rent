import { ChangeEvent, useState } from "react";

import { InputTextType } from "../../../types/global-type";

const TextArea = ({
  name,
  label,
  placeholder,
  validationText,
  error,
  required,
  disabled,
  className,
  initialValue,
  updateValue,
}: InputTextType) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

      <textarea
        name={name}
        id={name}
        className={`input-form peer h-full rounded-md ${error && "input-error"} ${disabled && "input-disabled"} ${className}`}
        placeholder={placeholder}
        disabled={disabled}
        value={inputValue}
        onChange={onChangeInput}
        rows={5}
      />

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

export default TextArea;
