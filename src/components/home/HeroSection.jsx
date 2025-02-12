import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="bg-white md:mt-20">
        <div className="grid w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Get Expert Betting Tips & Winning Slips
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Unlock accurate betting tips and curated slips designed to boost your chances of winning. 
            Whether you're a beginner or a seasoned punter, we’ve got you covered.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300"
            >
           Start Winning Today
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      {/* <div className="relative">
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
      {/* </div> */}
      {/* <Image src="/Hero_main.webp"
      width={1000}
      height={1000}
      alt='bg-image'
      className="absolute inset-0 w-full h-full object-cover" /> */}
      {/* </div> */}
    </>
  );
}
