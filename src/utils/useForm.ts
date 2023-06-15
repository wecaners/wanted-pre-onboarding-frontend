import { useState } from 'react';
import { signup } from '../apis/api/auth/signup';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await signup(values);
      if (response.status === 201) {
        alert('회원가입 되었습니다.');
        navigate('/signin');
      }
    } catch (e: unknown) {
      console.log(e);
    }
  };
  return {
    values,
    handleChange,
    handleSubmit
  };
}
