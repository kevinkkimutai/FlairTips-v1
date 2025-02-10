'use client';

import AllMatches from '@/components/allmatches/AllMatches';
import CountryList from '@/components/allmatches/CountryList';
import MatchesNavigation from '@/components/allmatches/MatchesNavigation';
import MatchesSection from '@/components/allmatches/MatchesSection';
import PopularMatches from '@/components/allmatches/PopularMatches';
import PublicPredictions from '@/components/allmatches/PublicPredictions';
import { useGetCountriesMutation } from '@/redux/actions/countryActions';
import { useGetPublicPredictionsMutation } from '@/redux/actions/publicPredictionsActions';
import { setCountries } from '@/redux/reducers/countryReducers';
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
  for (let i =2; i > 0; i--) {
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
  for (let i = 1; i <= 0; i++) {
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
  const[getCountries] = useGetCountriesMutation();
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
              page: 1,
              country: "",
            },
          },
        };
        const countryRequestBody = {
          request: {
            request_id: Date.now(),
            data: {
              
            },
          },
        };


        // get countrires
        const country = await getCountries(countryRequestBody).unwrap();
        dispatch(setCountries(country));
        // Call the mutation with the request body
        const response = await publicPredictions(requestBody).unwrap();
        console.log('Public Predictions 222:', response.data);
        dispatch(setPublicPredictions(response.data));
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch public predictions:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, [publicPredictions, getCountries, dispatch]);

  if (loading) {
    return <div className='flex items-center justify-center h-screen'>Loading...</div>;
  }

  return (
    <div className="py- lg:py-5 max-md:px-0 max-2xl:px-4">
    

      <div className="flex gap-4 mt-5 md:mt-10">
        {/* sidebar */}
        <div className="md:w-[20%] max-md:hidden mt-0 ">
          <CountryList />
        </div>
        {/* mid section */}
        <div className="md:w-[80%] md:sticky md:top-2 p-2 overflow-hidden">
      <div className=''>
      <MatchesNavigation
          activeDate={activeDate}
          setActiveDate={setActiveDate}
          dates={dates}
          range={range}
          formatDate={formatDate}
        />
      </div>

          {/* popular game */}
          {/* <div className="mt-5 md:mt-6 hidden">
            <h2 className="mb-2 font-bold text-lg">Popular Matches</h2>
            <PopularMatches />
          </div> */}

          {/* rest of games */}
          <div className="mt-5 md:mt-6 h-[95vh] overflow-scroll hide-scrollbar">
          <MatchesSection />
            <h2 className="mb-2 font-bold text-lg">All Matches</h2>
            {/* Filtered public predictions */}
            <AllMatches activeDate={activeDate} setPagenumber={setPagenumber} pagenumber={pagenumber} />
            {/* <PublicPredictions  activeDate={activeDate} setPagenumber={setPagenumber} pagenumber={pagenumber} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
