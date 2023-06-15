import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import SignupPage from '../pages/SignupPage/SignupPage';
import TodoPage from '../pages/TodoPage/TodoPage';
import NotFoundPage from '../pages/Error/404';
import LandingPage from '../pages/LandingPage/LandingPage';
import SigninPage from '../pages/SigninPage/SigninPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/signin',
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
