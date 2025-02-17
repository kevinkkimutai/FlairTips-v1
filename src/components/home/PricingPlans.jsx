'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PaymentModal from '../global/PaymentModal';
import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/reducers/AuthReducers';

export default function PricingPlans() {
  const router = useRouter();
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: 'Basic',
      description: 'Ideal for individuals who need quick access to basic features.',
      amount: 300,
      // features: ['50 Image generations', '500 Credits', 'Monthly 100 Credits Free', 'Customer Support', 'Dedicated Server', 'Priority Generations', '50GB Cloud Storage']
    },
    {
      title: 'Professional',
      description: 'Ideal for individuals who need advanced features and tools for client work.',
      amount: 50,
      // features: ['500 Image generations', '300 Credits', 'Monthly 1000 Credits Free', 'Customer Support', 'Dedicated Server', 'Priority Generations', '200GB Cloud Storage']
    },
    {
      title: 'Enterprise',
      description: 'For teams and organizations needing powerful tools and unlimited access.',
      amount: 1000,
      // features: ['Unlimited Image generations', 'Unlimited Credits', 'Custom AI Models', 'Dedicated Account Manager', 'Enterprise Support', 'VIP Generations', '1TB Cloud Storage']
    }
  ];

  const handlePlan = (plan) => {
    if (!user) {
      router.push(`/login?redirect=/pricing`); 
      return;
    }
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };
  

  const handleClose = () => {
    setSelectedPlan(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-32 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold">Choose a Subscription</h2>
          <p className='flex text-center items-center justify-center'>
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 max-md:max-w-lg max-md:mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded sm:p-6 p-4 shadow-lg ${index === 1 ? 'bg-green-600 text-white' : 'bg-white'}`}>
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="mt-2">{plan.description}</p>
              <div className="mt-6">
                <h2 className="text-4xl font-semibold">Ksh: {plan.amount}<span className="text-gray-500 ml-2 text-[15px]">/ Month</span></h2>
             
              </div>
              <div className="mt-6">
                <h4 className="text-base font-bold mb-4">Plan Includes</h4>
                {/* <ul className="space-y-5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" className={`mr-4 ${index === 1 ? 'fill-white' : 'fill-green-500'}`} viewBox="0 0 24 24">
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul> */}
              </div>
              <button type="button" onClick={() => handlePlan(plan)}
                  className={`w-full mt-6 px-6 py-3 rounded-xl transition-all ${index === 1 ? 'bg-white text-black hover:bg-gray-100' : 'bg-green-900 text-white hover:bg-green-800'}`}>
                  Get Started
                </button>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && <PaymentModal user={user} plan={selectedPlan} onClose={handleClose} />}
    </>
  );
}
