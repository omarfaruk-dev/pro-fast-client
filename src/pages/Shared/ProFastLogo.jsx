import React from 'react';
import logo from '../../assets/logo.png'

const ProFastLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2' src={logo} alt="profast logo" />
            <p className='text-3xl font-extrabold -ml-2'>ProFast</p>
        </div>
    );
};

export default ProFastLogo;