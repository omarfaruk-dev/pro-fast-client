
import authImg from '../../src/assets/authImage.png'
import { Outlet } from 'react-router';
import ProFastLogo from '../pages/Shared/ProFastLogo';

const AuthLayout = () => {
    return (
        <div className='min-h-screen max-w-5xl mx-auto py-20 px-4'>
        <ProFastLogo/>
        <div className=" flex items-center justify-center bg-base-100 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 shadow-md rounded-xl overflow-hidden w-full max-w-5xl">
                {/* Left Side: Form */}
                <div>
                    <Outlet />
                </div>
                {/* Right Side: Illustration */}
                <div className="bg-secondary/20 flex items-center justify-center py-30">
                    <img
                        src={authImg} // Replace with your actual image path or use import
                        alt="Delivery Illustration"
                        className="w-full max-w-sm"
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

export default AuthLayout;