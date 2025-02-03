'use client';
import { useForgetPasswordMutation } from "@/redux/actions/authActions";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [forgotPass] = useForgetPasswordMutation();

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
            identity: formData.email,
          },
        },
      };
      
  
      // Log to check the request payload
      console.log("Request body:", requestBody);
  
      const result = await forgotPass(requestBody).unwrap();
  
        toast.success("Password reset email sent!");
     
    } catch (error) {
      console.log("Error sending reset email:", error);
      toast.error(error?.data?.message || "Failed to send reset email!");
    }
  };
  
  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl md:bg-white md:shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              Forgot Password
            </h2>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter Your Email"
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
              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">
                Back to Home.{" "}
                <Link
                  href="/"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Home
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
