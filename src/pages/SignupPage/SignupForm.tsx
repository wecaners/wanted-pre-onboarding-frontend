import { useState } from 'react';

export default function SignupForm() {
  return (
    <form className='flex flex-col space-y-4'>
      <input
        data-testid='email-input'
        className='p-2 border border-blue-500 rounded-2xl'
        placeholder='Email'
      />
      <input
        data-testid='password-input'
        className='p-2 border border-blue-500 rounded-2xl '
        placeholder='Password'
      />
      <button
        data-testid='signup-button'
        className='p-2 text-white bg-blue-500 rounded-2xl'
      >
        회원가입
      </button>
    </form>
  );
}
