import { useState } from 'react';

interface UseFormOptions<TValues> {
  initValues: TValues,
  onSubmit?: (values: TValues) => void,
}

export const useForm = <TValues extends {}>({
  initValues,
  onSubmit,
}: UseFormOptions<TValues>) => {
  const [values, setValues] = useState(initValues);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
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

export default useForm;
