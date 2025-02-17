'use client'
import { useGetPaymentMutation } from '@/redux/actions/paymentActions';
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function PaymentModal({ plan, onClose, user }) {
  const [makePayment] = useGetPaymentMutation();
  const [formData, setFormData] = useState({
    phone: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestBody = {
        request: {
          request_id: Date.now(),
          data: {
            plan_id: plan.id,
            phone: formData.phone,
            payment_id: user.id,
            user_id: user.id,
          },
        },
      };

      const result = await makePayment(requestBody).unwrap();

      if (result?.success) {
        toast.success(result?.message || "Payment Prompt initiated successfully!");
      } else {
        toast.error(result?.message || "Payment failed!");
      }
    } catch (error) {
      console.error("Error creating promp:", error);
      toast.error(error?.data?.message || "Payment failed!");
    }
  };

  return (
    <>

<div  className=" overflow-y-auto overflow-x-hidden max-md:bg-white bg-white/80 flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full">
<div className="relative p-4 w-full max-w-4xl max-h-full flex items-center justify-center">
    <div className="relative bg-white rounded-lg shadow-lg max-md:border">
        <button type="button" onClick={onClose} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="popup-modal">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close modal</span>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 p-5 md:p-10">
     {/* Selected pricing plan */}
     <div className="bg-white rounded-lg p-6 md:shadow-lg">
       <h3 className="text-2xl font-semibold">{plan.title}</h3>
       <p className="mt-2 text-gray-600">{plan.description}</p>
       <div className="mt-6">
         <h2 className="text-4xl font-semibold">
          Ksh: {plan.amount}
          <span className="text-gray-500 ml-2 text-lg">/ Month</span>
         </h2>
       </div>
     </div>
<hr className='bg-black text-black w-full md:hidden' />
     {/* Payment form MPESA */}
     <div className="bg-white rounded-lg p-6 md:shadow-lg">
       <h3 className="text-2xl font-semibold">MPESA Payment</h3>
       <p className="mt-2 text-gray-600">Pay your subscription using MPESA.</p>
       <div className="mt-6">
         <input 
           type="text" 
           name='phone'
           placeholder="Enter MPESA number" 
           value={formData.phone}
          onChange={handleChange}
           className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-green-700"
         />
         <div className='flex gap-4'>
         <button 
           type="submit" 
           onClick={handleSubmit}
           className="w-full mt-6 px-6 py-2 rounded-xl text-white bg-green-700 transition-all hover:bg-green-600"
         >
           Pay Now
         </button>
         <button 
           type="submit" 
           onClick={onClose}
           className="w-full mt-6 px-6 py-2 rounded-xl text-white bg-red-700 transition-all hover:bg-red-600"
         >
           Cancel
         </button>
         </div>
       </div>
     </div>
   </div>
    </div>
</div>
</div>
   
  

</>
  )
}
