import React from 'react';
import parcelTracking from '../../assets/key-feature/parcel-tracking.png';
import safeDelivery from '../../assets/key-feature/safe-delivery.png';
import support247 from '../../assets/key-feature/247-support.png';

const features = [
  {
    img: parcelTracking,
    title: 'Live Parcel Tracking',
    desc: `Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.`
  },
  {
    img: safeDelivery,
    title: '100% Safe Delivery',
    desc: `We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.`
  },
  {
    img: support247,
    title: '24/7 Call Center Support',
    desc: `Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.`
  }
];

const KeyFeature = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <hr className="border-dashed border-secondary/20 border-t-2 mx-auto mb-8 md:mb-15" />
        <div className="flex flex-col gap-8 md:gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl flex flex-col md:flex-row items-center md:items-stretch gap-0 md:gap-6 p-6 md:p-8 shadow-sm">
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3 mb-4 md:mb-0">
                <img src={feature.img} alt={feature.title} className="h-36 md:h-40 w-auto object-contain" />
              </div>
              <div className="flex-1 flex flex-col justify-center border-t md:border-t-0 md:border-l border-dashed border-secondary/30 pl-0 md:pl-8 pt-4 md:pt-0">
                <h3 className="font-bold text-lg md:text-xl text-primary mb-2">{feature.title}</h3>
                <p className="text-accent text-sm md:text-base leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-dashed border-secondary/30 border-t-2  mx-auto mt-10 md:mt-15" />
      </div>
    </section>
  );
};

export default KeyFeature;