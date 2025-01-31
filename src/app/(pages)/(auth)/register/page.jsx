"use client";
import Link from 'next/link';
import React, { useState } from 'react'

export default function page() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="font-[sans-serif]">
    <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div className="max-w-lg w-full">
        <div className="p-8 rounded-2xl md:bg-white md:shadow">
          <h2 className="text-gray-800 text-center text-2xl font-bold">
            Create an account
          </h2>
          <form className="mt-8 space-y-4">
          <>
          <div>
            
              <label className="text-gray-800 text-sm mb-2 block">FullName</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-black"
                  placeholder="Enter Name"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-black"
                  placeholder="Enter Email"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-black"
                  placeholder="Enter password"
                />
             
                  {showPassword ? (
                  <svg onClick={togglePasswordVisibility} className="w-5 h-5 absolute right-4 text-gray-400 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                
                  ) : (
                      <svg  onClick={togglePasswordVisibility} className="w-5 h-5 absolute text-gray-400 right-4 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                      <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                    
                  )}
                
              </div>
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-black"
                  placeholder="Confirm Password"
                />
             
                  {showPassword ? (
                  <svg onClick={togglePasswordVisibility} className="w-5 h-5 absolute right-4 text-gray-400 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                
                  ) : (
                      <svg  onClick={togglePasswordVisibility} className="w-5 h-5 absolute text-gray-400 right-4 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                      <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                    
                  )}
                
              </div>
            </div>

           

            <div className="!mt-8">
              <button
                type="button"
                className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Register
              </button>
            </div>
            <p className="text-gray-800 text-sm !mt-8 text-center">
             Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
