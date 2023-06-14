import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../elements/Header';
import Footer from '../elements/Footer';

export default function MainLayout() {
  return (
    <div className='relative flex flex-col h-screen max-w-md m-auto bg-white'>
      <Header />
      <div className='flex items-center justify-center flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
