/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

export const useForm = <S extends {}>(
  initValues: S,
  onSubmit?: (values: S) => void,
) => {
  const [values, setValues] = useState(initValues);

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (onSubmit) onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
};
