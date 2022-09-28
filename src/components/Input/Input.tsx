// Components==============
import React, { useContext } from "react";
import { FormContext } from "../utils/formContext";
import "./Input.scss";
// =========================

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  disabled?: boolean;
};

export function Input({
  name,
  label,
  required = true,
  autoComplete,
  placeholder = "",
  disabled = false,
}: Props) {
  const { onChange, formValues, errors } = useContext(FormContext);

  return (
    <div className="wrapper">
      {!!label && <label htmlFor={name}>{label}</label>}
      <input
        type={
          name === "email"
            ? "email"
            : name.includes("password")
            ? "password"
            : "text"
        }
        name={name}
        onChange={onChange}
        value={formValues?.[name]}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errors?.[name][0] ? <p className="error">{errors?.[name][0]}</p> : null}
    </div>
  );
}
