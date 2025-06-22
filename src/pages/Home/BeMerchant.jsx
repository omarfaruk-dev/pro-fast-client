import React from 'react';
import locationMerchant from '../../assets/location-merchant.png';
import beMerchantBg from '../../assets/be-a-merchant-bg.png';

const BeMerchant = () => {
  return (
    <section className="bg-[#0d3c3f] rounded-3xl my-10 px-4 py-10 md:py-14 relative overflow-hidden flex items-center justify-center min-h-[300px]">
      {/* Top background image */}
      <img 
        src={beMerchantBg} 
        alt="Merchant BG" 
        className="absolute top-0 left-0 w-full h-32 md:h-40 object-cover object-top opacity-80 pointer-events-none select-none" 
        style={{zIndex:1}}
      />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-8 md:gap-0">
        {/* Left: Text */}
        <div className="flex-[2] text-base-100 md:pl-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Merchant and Customer Satisfaction <br/> is Our First Priority
          </h2>
          <p className="mb-7 text-base md:text-[16px] text-[#b6e0e2] max-w-lg">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-secondary rounded-full px-6 font-semibold">Become a Merchant</button>
            <button className="btn btn-outline btn-secondary rounded-full px-6 font-semibold border-2">Earn with Profast Courier</button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-[1] flex items-center justify-center">
          <img src={locationMerchant} alt="Merchant Location" className="max-h-48 md:max-h-60 w-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default BeMerchant;