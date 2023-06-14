import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../components/layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />
      }
    ]
  }
]);
