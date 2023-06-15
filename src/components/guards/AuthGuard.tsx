import { Navigate, Outlet } from 'react-router-dom';
import { getAccessToken } from '../../utils/localStorage';

export default function AuthGuard() {
  const isAuthenticated = getAccessToken() !== null;
  return isAuthenticated ? <Outlet /> : <Navigate to='/signin' />;
}
