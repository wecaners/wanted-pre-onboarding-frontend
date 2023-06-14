import { useEffect, useState } from 'react';
import useForm from '../../utils/useForm';
import EmailValidationCheck from '../../utils/EmailValidationCheck';
import PasswordValidationCheck from '../../utils/PasswordValidationCheck';

export default function SignupForm() {
  const [disabled, setDisabled] = useState<boolean>(true);
  const { values, handleSubmit, handleChange } = useForm({
    initialValues: {
      email: '',
      password: ''
    }
  });

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
        회원가입
      </button>
    </form>
  );
}
