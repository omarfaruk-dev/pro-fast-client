import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const ProFastLogo = () => {
    return (
        <Link to='/' className='flex items-end'>
            <img className='mb-2' src={logo} alt="profast logo" />
            <p className='text-3xl font-extrabold -ml-2'>ProFast</p>
        </Link>
    );
};

export default ProFastLogo;