import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='w-11/12'>
            <Navbar></Navbar>
           <Outlet></Outlet> 
        </div>
    );
};

export default MainLayout;