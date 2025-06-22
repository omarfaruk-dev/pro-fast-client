import React from 'react';
import Marquee from 'react-fast-marquee';

// Import client logos
import amazon from '../../assets/clients/amazon.png';
import casio from '../../assets/clients/casio.png';
import moonstar from '../../assets/clients/moonstar.png';
import randstad from '../../assets/clients/randstad.png';
import start from '../../assets/clients/start.png';
import startPeople from '../../assets/clients/start-people 1.png';

const clientLogos = [
  casio,
  amazon,
  moonstar,
  start,
  startPeople,
  randstad
];

const OurClients = () => {
  return (
    <section className="py-10 px-2 md:px-0 rounded-none">
      <h2 className="text-primary text-xl md:text-2xl font-bold text-center mb-2 mt-2 md:mt-0" style={{letterSpacing: 0}}>We've helped thousands of sales teams</h2>
      <div className="overflow-hidden w-full my-8">
        <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-2">
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="mx-12 flex items-center">
              <img
                src={logo}
                alt={`Client ${idx+1}`}
                className="h-6 md:h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default OurClients;