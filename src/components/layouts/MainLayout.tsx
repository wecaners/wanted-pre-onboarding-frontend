import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../elements/Header';
import Footer from '../elements/Footer';

export default function MainLayout() {
  return (
    <div className='relative max-w-md min-h-screen m-auto bg-white'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
