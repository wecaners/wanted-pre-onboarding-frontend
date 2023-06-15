import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold'>Wanted Frontend Pre Onboading</h1>
      <Link to='/signup'>
        <button className='p-2 mt-5 border border-blue-500 rounded-2xl hover:bg-blue-500 hover:text-white'>
          회원가입으로 시작하기
        </button>
      </Link>
    </div>
  );
}
