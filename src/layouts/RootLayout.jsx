import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='bg-gray-100'>
            <nav className='max-w-7xl mx-auto py-15'>
                <NavBar/>
            </nav>
            {/* max-w-7xl mx-auto */}
            <div className='max-w-7xl mx-auto'>
                <Outlet/>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Footer/>
            </div>
        </div>
    );
};

export default RootLayout;