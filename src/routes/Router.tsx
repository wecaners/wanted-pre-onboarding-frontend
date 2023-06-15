import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import SignupPage from '../pages/SignupPage/SignupPage';
import TodoPage from '../pages/TodoPage/TodoPage';
import NotFoundPage from '../pages/Error/404';
import SigninPage from '../pages/SigninPage/SignInPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'signin',
        element: <SigninPage />
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
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);
