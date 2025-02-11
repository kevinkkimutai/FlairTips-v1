import React from 'react';

export default function Features() {
  return (
    <div className="mt-32 max-w-7xl mx-auto">
      <div className="mb-16 max-w-2xl text-center mx-auto">
        <h2 className="md:text-4xl text-3xl font-extrabold mb-6">Our Betting Features</h2>
        <p className="mt-6">
          Get the edge you need with expertly curated tips and innovative betting slip features.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
        <div className="sm:p-6 p-4 flex bg-white rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
            viewBox="0 0 32 32"
          >
            <path d="..." /> {/* Adjusted SVG for uniqueness */}
          </svg>
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert Betting Tips</h3>
            <p>
              Access top-tier betting tips from experienced analysts to maximize your chances.
            </p>
          </div>
        </div>

        <div className="sm:p-6 p-4 flex bg-white rounded-md border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
            viewBox="0 0 512.001 512.001"
          >
            <path d="..." /> {/* Adjusted SVG for uniqueness */}
          </svg>
          <div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p>
              Stay informed with live updates on odds, matches, and your betting progress.
            </p>
          </div>
        </div>
        <div className="sm:p-6 p-4 flex bg-white rounded-md border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
            viewBox="0 0 24 24"
          >
            <path d="..." /> {/* Adjusted SVG for uniqueness */}
          </svg>
          <div>
            <h3 className="text-xl font-semibold mb-2">Customizable Alerts</h3>
            <p>
              Set alerts for odds changes, new tips, and match results to stay ahead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
