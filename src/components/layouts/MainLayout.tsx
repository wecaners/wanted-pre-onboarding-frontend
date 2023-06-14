import React from 'react';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className='max-w-md m-auto'>
      <Outlet />
    </div>
  );
}
