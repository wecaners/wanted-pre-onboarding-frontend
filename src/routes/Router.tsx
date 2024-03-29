import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import SignupPage from '../pages/SignupPage/SignupPage';
import TodoPage from '../pages/TodoPage/TodoPage';
import NotFoundPage from '../pages/Error/404';
import LandingPage from '../pages/LandingPage/LandingPage';
import NoAuthGuard from '../components/guards/NoAuthGuard';
import AuthGuard from '../components/guards/AuthGuard';
import SigninPage from '../pages/SigninPage/SignInPage';

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
            path: '/signup',
            element: <SignupPage />
          },
          {
            path: '/signin',
            element: <SigninPage />
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
