import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    
    <div className="relative">
      <div className="px-4 sm:px-10">
      <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
  <h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">Get Expert Betting Tips & Winning Slips</h1>
  <p className="text-base">
    Unlock accurate betting tips and curated slips designed to boost your chances of winning. Whether you're a beginner or a seasoned punter, we’ve got you covered.
  </p>
  <div className="mt-10">
    <button className='px-6 py-3 rounded-xl text-white bg-green-900 transition-all hover:bg-green-800'>Start Winning Today</button>
  </div>
</div>

        {/* <hr className="my-12 border-gray-300" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto" alt="google-logo" />
          <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" />
          <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" />
          <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto" alt="pinterest-logo" />
        </div> */}
      </div>
      {/* <Image src="/Hero_main.webp"
      width={1000}
      height={1000}
      alt='bg-image'
      className="absolute inset-0 w-full h-full object-cover" /> */}
    </div>
  )
}
