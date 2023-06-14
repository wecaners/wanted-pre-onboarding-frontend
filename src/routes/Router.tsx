import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import SignInPage from '../pages/SigninPage/SignInPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import TodoPage from '../pages/TodoPage/TodoPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/signin',
        element: <SignInPage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      },
      {
        path: '/todos',
        element: <TodoPage />
      }
    ]
  }
]);
