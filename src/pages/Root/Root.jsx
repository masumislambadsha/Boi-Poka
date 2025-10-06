import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  return (
    <div className='space-y-[50px]'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer ></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
