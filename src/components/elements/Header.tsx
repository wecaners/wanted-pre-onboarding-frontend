import { Link, useNavigate } from 'react-router-dom';
import { getAccessToken, removeAccessToken } from '../../utils/localStorage';

export default function Header() {
  const navigate = useNavigate();
  function handleClick() {
    removeAccessToken();
    navigate('/');
  }
  return (
    <nav>
      <div className='flex justify-end h-12 bg-blue-500 bg-opacity-90'>
        <div className='flex items-center space-x-2'>
          <Link to='/signup'>
            <button className='p-2 text-white'>회원가입</button>
          </Link>
          {getAccessToken() !== null ? (
            <>
              <button className='p-2 text-white' onClick={handleClick}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to='/signin'>
                <button className='p-2 text-white'>로그인</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
