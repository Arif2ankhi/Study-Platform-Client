import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
    return (
        <div className='w-11/12'>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           
        </div>
    );
};

export default MainLayout;