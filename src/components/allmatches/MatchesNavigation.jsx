'use client';

import React, { useEffect, useRef } from 'react';

export default function MatchesNavigation({ activeDate, setActiveDate, dates, range, formatDate }) {
  // Reference for the "Today" element
  const todayRef = useRef(null);

  // Scroll the "Today" element into view on mount
  useEffect(() => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, []);

  return (
    <div className="">
      {/* Container with hidden scrollbar but scrollable */}
      <div className="flex gap-4 overflow-x-auto p-1 rounded-md hide-scrollbar">
        {dates.map((item, index) => {
          const dateLabel = range.find((r) => r.date.getTime() === item.getTime());
          const dateFormatted = formatDate(item);
          const isActive = activeDate === dateFormatted;

          return (
            <div
              key={index}
              className={`max-md:min-w-[6.5rem] min-w-[8rem] flex justify-center 
                ${isActive ? 'bg-green-700' : 'bg-green-900'} hover:bg-green-700 
                text-white p-2 rounded-lg cursor-pointer`}
              ref={dateLabel?.label === 'Today' ? todayRef : null} 
              onClick={() => {
                setActiveDate(dateFormatted);
              }}
            >
              {dateLabel ? (
                <div className="font-bold">{dateLabel.label}</div>
              ) : (
                <div>{dateFormatted}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
