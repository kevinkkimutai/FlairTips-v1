import Link from 'next/link'
import React from 'react'

export default function SuscriptionModal({isOpen, onClose}) {
  return (
    <>
    {isOpen && (
     <div  className=" overflow-y-auto overflow-x-hidden bg-green-100/30 flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
     <div className="relative p-4 w-full max-w-md max-h-full flex items-center justify-center">
         <div className="relative bg-green-200 rounded-lg shadow-sm ">
             <button type="button" onClick={onClose} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="popup-modal">
                 <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                 </svg>
                 <span className="sr-only">Close modal</span>
             </button>
             <div className="p-4 md:p-5 text-center">
             <svg
                  className="mx-auto mb-4 text-green-600 w-12 h-12"
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
                  Unlock Exclusive Features!
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Subscribe to gain access to premium features and content.
                  Don't miss out on the benefits!
                </p>
                 <Link href="/subscribe" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Subscribe
                 </Link>
             </div>
         </div>
     </div>
 </div>
    )}

</>
  )
}
