'use client';

import AllMatches from '@/components/allmatches/AllMatches';
import CountryList from '@/components/allmatches/CountryList';
import MatchesNavigation from '@/components/allmatches/MatchesNavigation';
import MatchesSection from '@/components/allmatches/MatchesSection';
import { useGetCountriesMutation } from '@/redux/actions/countryActions';
import { useGetPublicPredictionsMutation, useGetSubscriberFixesMutation } from '@/redux/actions/publicPredictionsActions';
import { selectUser } from '@/redux/reducers/AuthReducers';
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
  const user = useSelector(selectUser);
  const [countryFilter, setCountryFilter] = useState("");
  const [publicPredictions] = useGetPublicPredictionsMutation();
  const [subscriberPredictions] = useGetSubscriberFixesMutation();
  const [getCountries] = useGetCountriesMutation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pagenumber, setPagenumber] = useState(1);
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const requestBody = {
          request: {
            request_id: Date.now(),
            data: {
              date:  String(activeDate),
              type: "all",
              page: pagenumber,
              country: String(countryFilter),
            },
          },
        };
        const countryRequestBody = {
          request: {
            request_id: Date.now(),
            data: {},
          },
        };

        // Fetch countries
        const country = await getCountries(countryRequestBody).unwrap();
        dispatch(setCountries(country));

        // Fetch public predictions
        const publicResponse = await publicPredictions(requestBody).unwrap();
        dispatch(setPublicPredictions(publicResponse.data));
        setTotalPages(publicResponse.count)

        // Fetch subscriber predictions if user is subscribed
        if (user?.is_subscribed === 1) {
          const subscriberResponse = await subscriberPredictions(requestBody).unwrap();
          dispatch(setPublicPredictions(subscriberResponse.data));
          setTotalPages(subscriberResponse.count)
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [publicPredictions, getCountries, subscriberPredictions, dispatch, user, countryFilter, pagenumber]);

  const handleCountryFilter = (countryName) => {
    setCountryFilter(countryName);
  };
console.log("selected country", countryFilter);

  // if (loading) {
  //   return <div className="flex items-center justify-center h-screen">Loading...</div>;
  // }
console.log("activeDate", activeDate);


  return (
    <div className="py- lg:py-5 max-md:px-0 max-2xl:px-4">
      <div className="flex gap-4 mt-5 md:mt-10">
        {/* Sidebar */}
        <div className="md:w-[20%] max-md:hidden mt-0">
          <CountryList handleCountryFilter={handleCountryFilter} />
        </div>

        {/* Main Section */}
        <div className="md:w-[80%] md:sticky md:top-2 p-2 overflow-hidden">
          <MatchesNavigation
            activeDate={activeDate}
            setActiveDate={setActiveDate}
            dates={dates}
            range={range}
            formatDate={formatDate}
          />
          <div className="mt-5 md:mt-6 h-[95vh] overflow-scroll hide-scrollbar">
            <MatchesSection />
            <h2 className="mb-2 font-bold text-[14px] max-lg:text-[12px]">All Matches</h2>
            <AllMatches
              activeDate={activeDate}
              setPagenumber={setPagenumber}
              pagenumber={pagenumber}
              totalPages={totalPages}
            />
          </div>
              {/* pagination */}
<nav className="flex w-full mt-6">
  <ul className="inline-flex -space-x-px text-sm mx-auto">
    {/* Previous Button */}
    <li>
      <button
        onClick={() => pagenumber > 1 && setPagenumber(pagenumber - 1)}
        className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${pagenumber === 1 ? "cursor-not-allowed text-gray-300" : ""}`}
        disabled={pagenumber === 1}
      >
        Previous
      </button>
    </li>
    
    {/* Page Numbers */}
    {[...Array(totalPages)].map((_, index) => {
      const page = index + 1;
      return (
        <li key={page}>
          <button
            onClick={() => setPagenumber(page)}
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${pagenumber === page ? "bg-green-500 text-white" : ""}`}
          >
            {page}
          </button>
        </li>
      );
    })}
    
    {/* Next Button */}
    <li>
      <button
        onClick={() => pagenumber < totalPages && setPagenumber(pagenumber + 1)}
        className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${pagenumber === totalPages ? "cursor-not-allowed text-gray-300" : ""}`}
        disabled={pagenumber === totalPages}
      >
        Next
      </button>
    </li>
  </ul>
</nav>
        </div>
      </div>
    </div>
  );
}
