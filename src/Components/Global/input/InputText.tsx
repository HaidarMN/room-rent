import { InputType } from "../../../types/global-type";

const InputText = ({
  name,
  label,
  placeholder,
  validationText,
  error,
  required,
  disabled,
  updateValue,
}: InputType) => {
  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <strong className="text-red-600">*</strong>}
        </label>
      )}

      <input
        type="text"
        name={name}
        id={name}
        className={`input-form ${error && "input-error"} ${disabled && "input-disabled"}`}
        placeholder={placeholder}
        disabled={disabled}
        onChange={updateValue}
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

export default InputText;
