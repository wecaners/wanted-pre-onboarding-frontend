import { useState } from 'react';

interface useFormProps {
  email: string;
  password: string;
}

export default function useForm({
  initialValues
}: {
  initialValues: useFormProps;
}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange
  };
}
