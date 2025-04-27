"use client";

import AllMatches from "@/components/allmatches/AllMatches";
import CountryList from "@/components/allmatches/CountryList";
import MatchesNavigation from "@/components/allmatches/MatchesNavigation";
import MatchesSection from "@/components/allmatches/MatchesSection";
import {
  useGetCountriesMutation,
} from "@/redux/actions/countryActions";
import {
  useGetPublicPredictionsMutation,
  useGetSubscriberFixesMutation,
} from "@/redux/actions/publicPredictionsActions";
import { selectUser } from "@/redux/reducers/AuthReducers";
import { setCountries } from "@/redux/reducers/countryReducers";
import { setPublicPredictions } from "@/redux/reducers/publicPredictionsReducers";
import { selectSubscription } from "@/redux/reducers/subscriptionReducers";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  // Date initialization (unchanged from your original code)
  const dates = [];
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  for (let i = 2; i > 0; i--) {
    const newDate = new Date(yesterday);
    newDate.setDate(yesterday.getDate() - i);
    dates.push(newDate);
  }

  const range = [
    { label: "Yesterday", date: yesterday },
    { label: "Today", date: new Date(today) },
  ];
  dates.push(...range.map((item) => item.date));

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [activeDate, setActiveDate] = useState(formatDate(today));
  const user = useSelector(selectUser);
  const [countryFilter, setCountryFilter] = useState("");
  const [publicPredictions] = useGetPublicPredictionsMutation();
  const [subscriberPredictions] = useGetSubscriberFixesMutation();
  const [getCountries] = useGetCountriesMutation();
  const subscription = useSelector(selectSubscription);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pagenumber, setPagenumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [showEndMessage, setShowEndMessage] = useState(false);
  const containerRef = useRef(null);
  const isInitialMount = useRef(true);

  const fetchData = useCallback(async (page = 1, isInitialLoad = false) => {
    if (loading || (page > totalPages && !isInitialLoad && totalPages > 0)) return;
    
    try {
      setLoading(true);
      setShowEndMessage(false);

      const requestBody = {
        request: {
          request_id: Date.now(),
          data: {
            date: String(activeDate),
            type: "all",
            page: page,
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

      if (isInitialLoad) {
        const country = await getCountries(countryRequestBody).unwrap();
        dispatch(setCountries(country));
      }

      let response;
      if (subscription?.is_subscribed === 1) {
        response = await subscriberPredictions(requestBody).unwrap();
      } else {
        response = await publicPredictions(requestBody).unwrap();
      }

      dispatch(
        setPublicPredictions({
          publicpredictions: response.data,
          page: page,
          append: !isInitialLoad
        })
      );

      if (isInitialLoad) {
        setTotalPages(response.count || 1);
        setHasMore(response.count > 1);
      } else {
        setHasMore(page < response.count);
      }

      // Automatically load next page if there's more content
      if (page < response.count) {
        setPagenumber(page + 1);
      } else {
        setShowEndMessage(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [activeDate, countryFilter, loading, subscription, totalPages]);

  // Initial load and when filters change
  useEffect(() => {
    setPagenumber(1);
    fetchData(1, true);
    isInitialMount.current = false;
  }, [activeDate, countryFilter, subscription]);

  // Handle automatic loading when content is too short
  useEffect(() => {
    if (isInitialMount.current || loading || !hasMore) return;

    const checkContentHeight = () => {
      if (!containerRef.current) return;

      const { scrollHeight, clientHeight } = containerRef.current;
      if (scrollHeight <= clientHeight * 1.5) {
        setPagenumber(prev => prev + 1);
      }
    };

    const timer = setTimeout(checkContentHeight, 300);
    return () => clearTimeout(timer);
  }, [loading, hasMore, pagenumber]);

  const handleCountryFilter = (countryName) => {
    setCountryFilter(countryName);
  };

  return (
    <div className="py- lg:py-5 max-md:px-0 max-2xl:px-4">
      <div className="flex gap-4 mt-5 md:mt-2">
        {/* Sidebar */}
        <div className="md:w-[20%] max-md:hidden mt-0">
          <CountryList loading={loading} handleCountryFilter={handleCountryFilter} />
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
          <div
            className="mt-5 md:mt-5 h-[95vh] overflow-scroll hide-scrollbar"
            ref={containerRef}
          >
            <h2 className="mb-2 font-bold text-[14px] max-lg:text-[12px]">
              All Matches
            </h2>
            <AllMatches loading={loading} activeDate={activeDate} pagenumber={pagenumber} />
            
            {/* "No more matches" message */}
            {showEndMessage && pagenumber > 1 && (
              <div className="text-center py-4 text-gray-500">
                No more matches to load
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}