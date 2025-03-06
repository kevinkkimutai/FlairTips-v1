import React from 'react';


export default function Page() {
  return (
    <div className="text-black lg:py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-4xl w-full shadow-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
          {/* Selected pricing plan */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold">Standard</h3>
            <p className="mt-2 text-gray-600">Ideal for small teams or solo players.</p>
            <div className="mt-6">
              <h2 className="text-4xl font-semibold">
                $10<span className="text-gray-500 ml-2 text-lg">/ Month</span>
              </h2>
            </div>
          </div>

          {/* Payment form MPESA */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold">MPESA Payment</h3>
            <p className="mt-2 text-gray-600">Pay your subscription using MPESA.</p>
            <div className="mt-6">
              <input 
                type="text" 
                placeholder="Enter MPESA number" 
                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-green-700"
              />
              <button 
                type="submit" 
                className="w-full mt-6 px-6 py-3 rounded-xl text-white bg-green-700 transition-all hover:bg-green-600"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
