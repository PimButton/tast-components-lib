// Components==============
import React, { createContext, useMemo } from "react";
// =========================

type FormContextTypes = {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  errors: any;
  formValues: any;
  setFormValues?: React.Dispatch<any>;
};

export const FormContext = createContext({} as FormContextTypes);

export function FormContextWrapper({
  onChange,
  errors,
  formValues,
  setFormValues,
  children,
}: FormContextTypes & { children: React.ReactNode }) {
  const contextValue = useMemo(
    () => ({
      onChange,
      errors,
      formValues,
      setFormValues,
    }),
    [errors, formValues]
  );

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}
