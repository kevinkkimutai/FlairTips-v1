import React from 'react'

export default function HistorySection() {
  return (
    <>
        <div className='rounded-lg shadow-md border w-2/5 px-4 max-h-[400px] hide-scrollbar overflow-scroll'>
            <div className='w-full flex items-center justify-start bg-white  border-b py-2 sticky top-0'>
                <h3 className='font-semibold'>Subscription History</h3>
            </div>

            <div>
               <div className='border rounded-md mt-3 p-2 mb-2 shadow-md'>
               <p className=' text-gray-700 flex items-center justify-between'>
               <span className='text-sm'>12/12/2022</span>
               <span className='text-sm bg-green-400 rounded-lg px-2'>Mpesa</span>
                </p>
                <div className='flex gap-2 mt-2 items-center justify-between'>
                <p className=' text-gray-700'>Transaction Id: <br /> 15122022</p>
                <p className=' text-gray-700'>Amount: <br/> ksh: 1000</p>
                </div>
               </div>
               <div className='border rounded-md mt-3 p-2 mb-2'>
               <p className=' text-gray-700 flex items-center justify-between'>
               <span className='text-sm'>12/12/2022</span>
               <span className='text-sm bg-green-400 rounded-lg px-2'>Mpesa</span>
                </p>
                <div className='flex gap-2 mt-2 items-center justify-between'>
                <p className=' text-gray-700'>Transaction Id: <br /> 15122022</p>
                <p className=' text-gray-700'>Amount: <br/> ksh: 1000</p>
                </div>
               </div>
               <div className='border rounded-md mt-3 p-2 mb-2'>
               <p className=' text-gray-700 flex items-center justify-between'>
               <span className='text-sm'>12/12/2022</span>
               <span className='text-sm bg-green-400 rounded-lg px-2'>Mpesa</span>
                </p>
                <div className='flex gap-2 mt-2 items-center justify-between'>
                <p className=' text-gray-700'>Transaction Id: <br /> 15122022</p>
                <p className=' text-gray-700'>Amount: <br/> ksh: 1000</p>
                </div>
               </div>
               <div className='border rounded-md mt-3 p-2 mb-2'>
               <p className=' text-gray-700 flex items-center justify-between'>
               <span className='text-sm'>12/12/2022</span>
               <span className='text-sm bg-green-400 rounded-lg px-2'>Mpesa</span>
                </p>
                <div className='flex gap-2 mt-2 items-center justify-between'>
                <p className=' text-gray-700'>Transaction Id: <br /> 15122022</p>
                <p className=' text-gray-700'>Amount: <br/> ksh: 1000</p>
                </div>
               </div>
               <div className='border rounded-md mt-3 p-2 mb-2'>
               <p className=' text-gray-700 flex items-center justify-between'>
               <span className='text-sm'>12/12/2022</span>
               <span className='text-sm bg-green-400 rounded-lg px-2'>Mpesa</span>
                </p>
                <div className='flex gap-2 mt-2 items-center justify-between'>
                <p className=' text-gray-700'>Transaction Id: <br /> 15122022</p>
                <p className=' text-gray-700'>Amount: <br/> ksh: 1000</p>
                </div>
               </div>
            </div>
        </div>
      
    </>
  )
}
