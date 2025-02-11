import React from 'react';

export default function Unlock() {
  return (
    <div className="mt-32 bg-white rounded-md px-4 py-12 shadow-lg">
      <div className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto">
        <div className="max-md:text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold mb-6 text-gray-800">
            Unlock Premium Features
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Take your experience to the next level! Enjoy advanced tools, exclusive insights, and
            personalized features designed to make your journey seamless and more productive. Don’t
            miss out on unlocking the full potential of our platform.
          </p>
          <a
          href="/"
            className="px-6 py-3 rounded-xl text-white bg-green-900 transition-all hover:bg-green-800 mt-10 shadow-md"
          >
            Try it Today
          </a>
        </div>
        <div>
          <img
            src="https://www.faria.org/wp-content/uploads/2021/03/activity-management.png"
            alt="Premium Benefits Illustration"
            className="w-full mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
