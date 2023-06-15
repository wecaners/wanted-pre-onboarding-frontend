import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <div className='flex items-center justify-end h-12 bg-blue-500 bg-opacity-90'>
        <div className='space-x-2'>
          <Link to='/signup'>
            <button className='p-2 text-white'>회원가입</button>
          </Link>
          <Link to='/signin'>
            <button className='p-2 text-white'>로그인</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
