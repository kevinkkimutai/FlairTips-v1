'use client';

import AllMatches from '@/components/allmatches/AllMatches';
import CountryList from '@/components/allmatches/CountryList';
import MatchesNavigation from '@/components/allmatches/MatchesNavigation';
import MatchesSection from '@/components/allmatches/MatchesSection';
import PopularMatches from '@/components/allmatches/PopularMatches';
import PublicPredictions from '@/components/allmatches/PublicPredictions';
import { useGetPublicPredictionsMutation } from '@/redux/actions/publicPredictionsActions';
import { setPublicPredictions } from '@/redux/reducers/publicPredictionsReducers';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  const [publicPredictions] = useGetPublicPredictionsMutation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pagenumber, setPagenumber] = useState(1);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const requestBody = {
          request: {
            request_id: Date.now(),
            data: {
              date: "today",
              type: "all",
              page: pagenumber,
              country: "",
            },
          },
        };

        // Call the mutation with the request body
        const response = await publicPredictions(requestBody).unwrap();
        console.log('Public Predictions:', response);
        dispatch(setPublicPredictions(response));
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch public predictions:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, [publicPredictions, dispatch]);

  if (loading) {
    return <div className='flex items-center justify-center h-screen'>Loading...</div>;
  }

  return (
    <div className="py-5 lg:py-10">
      <div className="">
        <MatchesNavigation
          activeDate={activeDate}
          setActiveDate={setActiveDate}
          dates={dates}
          range={range}
          formatDate={formatDate}
        />
      </div>

      <div className="flex gap-4 mt-5 md:mt-10">
        {/* sidebar */}
        <div className="w-[20%] max-md:hidden p-2">
          <CountryList />
        </div>
        {/* mid section */}
        <div className="flex-1  p-2">
          <MatchesSection />

          {/* popular game */}
          <div className="mt-5 md:mt-6">
            <h2 className="mb-2 font-bold text-lg">Popular Matches</h2>
            <PopularMatches />
          </div>

          {/* rest of games */}
          <div className="mt-5 md:mt-6">
            <h2 className="mb-2 font-bold text-lg">All Matches</h2>
            {/* Filtered public predictions */}
            <PublicPredictions  activeDate={activeDate} setPagenumber={setPagenumber} pagenumber={pagenumber} />
          </div>
        </div>
      </div>
    </div>
  );
}
