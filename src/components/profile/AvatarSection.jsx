import Image from 'next/image'
import React from 'react'

export default function AvatarSection({ user }) {
  return (
    <>
    <div className="flex flex-col items-center justify-center shadow-lg border rounded-lg overflow-hidden py-10 relative">
    <span className='absolute top-2 left-2 '>{user?.is_validated ? (
  <svg className="w-8 h-8 text-blue-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
</svg>

) : (
  <svg className="w-8 h-8 text-red-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd"/>
</svg>

)}

</span>
        <Image
            src={user?.avatar || '/globe.svg'}
            className="rounded-full h-[100px] bg-red-100 object-cover "
            alt={user?.first_name + "username"}
            width={100}
            height={100}
            priority
          />
     
          <div className="mt-5">{user?.first_name} { user?.last_name}</div>
         </div>

         {/* subscription section */}
         <div className="shadow-lg border rounded-lg overflow-hidden">
           <div className="flex flex-col items-center justify-center py-10 relative">
            <p className={` ${user?.is_active ? "bg-green-400" : "bg-red-400"} absolute top-0 left-0 px-2 rounded-br-lg `}>
               <span className={`text-black `}>
                { user?.is_active ? "Active" : "InActive" }
                </span>
               {/* <span className="text-gray-400">since 2022-05-01</span> */}
            </p>
             <h3 className="font-bold  ">Standard</h3>
             <p className="">Ideal for small teams or solo players.</p>
             <div className="py-4">
               <span className="underline font-bold">ksh: 1000/month</span>
              
             </div>
           </div>
           <hr className="bg-black mx-auto w-[70%]" />
           <div className="py-10">
             <div className="flex flex-col items-center justify-center">
               <h3 className="font-bold">MPESA Payment</h3>
               <p>Your subscription was paid using MPESA.</p>
             </div>
             <div className="w-full flex items-center justify-center mt-10">
             <button className="bg-green-400 hover:bg-green-500 py-2 px-3 rounded-lg">
              Upgrade Subscription
             </button>
             </div>
            
           </div>
         </div>
    </>
  )
}
