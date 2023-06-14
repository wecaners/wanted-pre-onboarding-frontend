import { useState } from 'react';

export default function useForm({ initialValues, onSubmit, validate }: any) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  return {
    values,
    handleChange,
    handleSubmit
  };
}
