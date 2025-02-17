import React from 'react';

export default function ThankYou({ isOpen, onClose }) {
  return (
    <>
  {isOpen && (
        <div className="flex bg-green-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full">
          <div className="relative p-4 w-full max-w-3xl max-h-full">
            <div className="relative bg-white shadow-lg rounded-lg p-6">
              <div className="p-4 md:p-5 text-center">
                <svg className="w-20 h-20 mx-auto text-green-600 mb-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 1 0-18c1.052 0 2.062.18 3 .512M7 9.577l3.923 3.923 8.5-8.5M17 14v6m-3-3h6"/>
                </svg>

                <h3 className="mb-5 text-[32px] md:text-[48px] font-bold text-green-700">
                  Payment Received!
                </h3>
                <p className="text-[16px] md:text-[20px] text-gray-700">
                  Your payment has been successfully processed. Thank you for your transaction!
                  You will receive a confirmation shortly.
                </p>

                <button 
                  onClick={onClose} 
                  className="text-white mt-10 bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Back to Matches
                </button>
              </div>
            </div>
          </div>
        </div>
     )}
    </>
  );
}
