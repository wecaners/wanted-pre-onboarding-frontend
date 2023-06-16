import { Link, useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../utils/localStorage';

export default function LandingPage() {
  const navigate = useNavigate();
  function handleClick() {
    if (getAccessToken() !== null) {
      navigate('/todo');
    } else {
      navigate('/signup');
    }
  }
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold'>Wanted Frontend Pre Onboading</h1>
      <Link to='/signup'>
        <button
          className='p-2 mt-5 border border-blue-500 rounded-2xl hover:bg-blue-500 hover:text-white '
          onClick={handleClick}
        >
          시작하기
        </button>
      </Link>
    </div>
  );
}
