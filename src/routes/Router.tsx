import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import SignupPage from '../pages/SignupPage/SignupPage';
import TodoPage from '../pages/TodoPage/TodoPage';
import NotFoundPage from '../pages/Error/404';
import LandingPage from '../pages/LandingPage/LandingPage';
import SigninPage from '../pages/SigninPage/SigninPage';
import NoAuthGuard from '../components/guards/NoAuthGuard';
import AuthGuard from '../components/guards/AuthGuard';

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
        element: <NoAuthGuard />,
        children: [
          {
            path: '/signin',
            element: <SigninPage />
          },
          {
            path: '/signup',
            element: <SignupPage />
          }
        ]
      },
      {
        element: <AuthGuard />,
        children: [
          {
            path: '/todo',
            element: <TodoPage />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);
