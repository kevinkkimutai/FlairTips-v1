'use client';

import AllMatches from '@/components/allmatches/AllMatches';
import CountryList from '@/components/allmatches/CountryList';
import MatchesNavigation from '@/components/allmatches/MatchesNavigation';
import MatchesSection from '@/components/allmatches/MatchesSection';
import PopularMatches from '@/components/allmatches/PopularMatches';
import React, { useEffect, useRef, useState } from 'react';

export default function Page() {
  const dates = [];
  const today = new Date();

  // Get yesterday's date.
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Add 3 days before yesterday
  for (let i = 3; i > 0; i--) {
    const newDate = new Date(yesterday);
    newDate.setDate(yesterday.getDate() - i);
    dates.push(newDate);
  }

  // Add yesterday, today, and tomorrow with labels
  const range = [
    { label: 'Yesterday', date: yesterday },
    { label: 'Today', date: new Date(today) },
    { label: 'Tomorrow', date: new Date(today.getTime() + 24 * 60 * 60 * 1000) },
  ];

  dates.push(...range.map(item => item.date));

  // Add 5 days after tomorrow
  for (let i = 1; i <= 5; i++) {
    const newDate = new Date(range[2].date.getTime());
    newDate.setDate(range[2].date.getDate() + i);
    dates.push(newDate);
  }

  // Helper function to format a date like "Tue Feb 3"
  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    });
  };

  const [activeDate, setActiveDate] = useState(formatDate(today));

  return (
    <div className="py-5 lg:py-10">
     <div className=''>
     <MatchesNavigation
        activeDate={activeDate}
        setActiveDate={setActiveDate}
        dates={dates}
        range={range}
        formatDate={formatDate}
      />
     </div>

     <div className='flex gap-4 mt-5 md:mt-10'>
      {/* sidebar */}
     <div className='w-[20%]  p-2'>
     <CountryList />
     </div>
     {/* mid section */}
     <div className='flex-1  p-2'>
     <MatchesSection />

     {/* popular game */}
     <div className='mt-5 md:mt-6'>
      <h2 className='mb-2 font-bold text-lg'>
        Popular Matches
      </h2>
      <PopularMatches />
     </div>

     {/* rest of games */}
     <div className='mt-5 md:mt-6'>
     <h2 className='mb-2 font-bold text-lg'>
       All MAtches
      </h2>
      <AllMatches />
     </div>


     </div>
     </div>
    </div>
  );
}
