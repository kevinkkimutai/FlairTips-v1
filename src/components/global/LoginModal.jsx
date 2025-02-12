import Link from 'next/link'
import React from 'react'

export default function SuscriptionModal({isOpen, onClose}) {
  return (
    <>
    {isOpen && (
     <div  className=" overflow-y-auto overflow-x-hidden bg-green-100/30 flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
     <div className="relative p-4 w-full max-w-md max-h-full flex items-center justify-center">
         <div className="relative bg-white rounded-lg shadow-sm ">
             <button type="button" onClick={onClose} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="popup-modal">
                 <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                 </svg>
                 <span className="sr-only">Close modal</span>
             </button>
             <div className="p-4 md:p-5 text-center">
             <svg
                  className="mx-auto mb-4 text-blue-600 w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Welcome Back!
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Please log in to access your account and unlock personalized
                  features.
                </p>
                <Link
                  href="/login"
                  onClick={onClose}
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5"
                >
                  Log In
                </Link>
             </div>
         </div>
     </div>
 </div>
    )}

</>
  )
}
