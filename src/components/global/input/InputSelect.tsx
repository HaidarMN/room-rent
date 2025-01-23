import { useState } from "react";

import Select, { components } from "react-select";
import { Icon } from "@iconify/react/dist/iconify.js";

import { InputSelectType } from "../../../types/global-type";

const InputSelect = ({
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
  options,
  multi,
  clearable,
  isLoading,
  menuPlacement = "bottom",
  initialValue,
  updateValue,
}: InputSelectType) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [focused, setFocused] = useState<boolean>(false);

  const onChangeInput = (val: string | number | Array<string | number>) => {
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

      <div className="input-icon-wrapper">
        {icon && (
          <div
            className={`input-icon bg-white ${focused && "border-r-0 border-black"} ${rounded ? "rounded-full" : "rounded-md"}`}
          >
            <Icon icon={icon} />
          </div>
        )}

        <Select
          name={name}
          id={name}
          placeholder={placeholder}
          isDisabled={disabled}
          isClearable={clearable}
          isSearchable
          isMulti={multi}
          isLoading={isLoading}
          options={options}
          menuPlacement={menuPlacement}
          value={options.filter((val) =>
            multi && Array.isArray(inputValue)
              ? inputValue.includes(val.value)
              : val.value === inputValue,
          )}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => {
            const final_value = multi
              ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                e?.map((val: any) => val?.value)
              : e?.value;

            onChangeInput(final_value);
          }}
          unstyled
          styles={{
            input: (base) => ({
              ...base,
              "input:focus": {
                boxShadow: "none",
              },
            }),
          }}
          classNames={{
            container: () => "w-full",
            placeholder: () => "text-neutral-500",
            control: ({ isFocused }) =>
              `input-form py-1 ${icon && "rounded-l-none border-l-0 !px-2 focus:border-l-0"} ${rounded ? "rounded-full" : "rounded-md"} ${error && "input-error"} ${disabled && "input-disabled"} ${isFocused && "border-black"} ${className}`,
            valueContainer: () => "gap-1",
            multiValue: () =>
              "bg-gray-100 rounded items-center py-0.5 pl-1 pr-1 gap-1.5",
            menu: () =>
              "p-1 mt-2 border border-gray-200 bg-white rounded-lg shadow",
            option: ({ isFocused, isSelected }) =>
              `${isFocused && "bg-neutral-100 active:bg-neutral-200"} ${isSelected && "text-accent"} hover:cursor-pointer px-3 py-2 rounded text-xs`,
          }}
          components={{
            DropdownIndicator: (props) => (
              <components.DropdownIndicator {...props}>
                <Icon icon="line-md:chevron-down" className="text-lg" />
              </components.DropdownIndicator>
            ),
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
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

export default InputSelect;
