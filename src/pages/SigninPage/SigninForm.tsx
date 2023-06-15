import { useEffect, useState } from 'react';
import useForm from '../../utils/useForm';
import EmailValidationCheck from '../../utils/EmailValidationCheck';
import PasswordValidationCheck from '../../utils/PasswordValidationCheck';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../apis/api/auth/signin';
import { setAccessToken } from '../../utils/localStorage';

export default function SigninForm() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(true);
  const { values, handleChange } = useForm({
    initialValues: {
      email: '',
      password: ''
    }
  });
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await signin(values);
      if (response.status === 200) {
        console.log(response);
        setAccessToken(response.data.access_token);
        alert('로그인 되었습니다.');
        navigate('/todo');
      }
    } catch (e: unknown) {
      alert('로그인에 실패하셨습니다.');
    }
  };

  useEffect(() => {
    const { email, password } = values;
    const isValidEmail = EmailValidationCheck(email);
    const isValidPassword = PasswordValidationCheck(password);
    setDisabled(!(isValidEmail && isValidPassword));
  }, [values]);

  return (
    <form className='flex flex-col space-y-4'>
      <input
        name='email'
        data-testid='email-input'
        className='p-2 border border-blue-500 rounded-2xl'
        placeholder='Email'
        onChange={handleChange}
        value={values.email}
      />
      <input
        type='password'
        name='password'
        data-testid='password-input'
        className='p-2 border border-blue-500 rounded-2xl '
        placeholder='Password'
        onChange={handleChange}
        value={values.password}
      />
      <button
        data-testid='signup-button'
        className={
          disabled
            ? 'p-2 text-white bg-blue-500 bg-opacity-70 rounded-2xl'
            : 'p-2 text-white bg-blue-500 rounded-2xl'
        }
        onClick={handleSubmit}
        disabled={disabled}
      >
        로그인
      </button>
    </form>
  );
}
