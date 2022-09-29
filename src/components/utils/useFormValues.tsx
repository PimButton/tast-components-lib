const { useState } = require("react");

export type FormValuesTypes = ReturnType<typeof useFormValues>;

export function useFormValues<T>(initialValues: T): {
  formValues: T;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  errors: T;
  setErrors: React.Dispatch<React.SetStateAction<any>>;
  setFormValues: React.Dispatch<React.SetStateAction<T>>;
} {
  const emptyInitialValues = Object.keys(initialValues as {}).reduce(
    (acc, key) => ({ ...acc, [key]: "" }),
    {}
  );

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(emptyInitialValues);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setErrors(emptyInitialValues);
    setFormValues((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return { formValues, handleChange, errors, setErrors, setFormValues };
}
