import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  return (
    <div className='space-y-[50px]'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer ></Footer>
    </div>
  );
};

export default Root;
