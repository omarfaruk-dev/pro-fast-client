import React from 'react';
import { LuMapPin, LuWallet, LuPackage, LuBuilding2 } from "react-icons/lu";

const steps = [
  {
    title: "Booking Pick & Drop",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon: <LuMapPin size={36} />,
  },
  {
    title: "Cash On Delivery",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon: <LuWallet size={36} />,
  },
  {
    title: "Delivery Hub",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon: <LuPackage size={36} />,
  },
  {
    title: "Booking SME & Corporate",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
    icon: <LuBuilding2 size={36} />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#f3f6f7] py-10 px-8">
      <h2 className="text-left text-2xl md:text-3xl font-bold text-[#184042] mb-8">How it Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-start hover:shadow-md transition"
          >
            <div className="text-[#184042] mb-4">
              {step.icon}
            </div>
            <h3 className="font-semibold text-lg text-[#184042] mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;