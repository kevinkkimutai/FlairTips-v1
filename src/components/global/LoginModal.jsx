import Link from "next/link";
import React from "react";

export default function LoginModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="overflow-y-auto overflow-x-hidden bg-black/50 flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-screen">
          <div className="relative p-6 w-full max-w-md max-h-full flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg">
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 bg-transparent rounded-lg text-lg focus:outline-none"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-6 text-center">
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
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5"
                >
                  Log In
                </Link>
                <button
                  onClick={onClose}
                  className="mt-4 text-sm text-gray-600 hover:text-gray-800"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
