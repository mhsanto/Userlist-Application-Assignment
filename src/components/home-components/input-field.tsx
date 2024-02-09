// InputField.tsx
import React from "react";

interface InputFieldProps {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col w-full gap-2 px-2">
      <label htmlFor={name} className="text-base font-medium">
      {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 w-full bg-slate-200/80 rounded-md outline-none focus-within:ring-2"
      />
    </div>
  );
};

export default InputField;
