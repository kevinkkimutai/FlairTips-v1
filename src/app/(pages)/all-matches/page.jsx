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
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const dates = [];
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Add previous dates
  for (let i = 2; i > 0; i--) {
    const newDate = new Date(yesterday);
    newDate.setDate(yesterday.getDate() - i);
    dates.push(newDate);
  }

  // Add yesterday, today, and tomorrow
  const range = [
    { label: "Yesterday", date: yesterday },
    { label: "Today", date: new Date(today) },
    { label: "Tomorrow", date: new Date(today.getTime() + 24 * 60 * 60 * 1000) },
  ];

  dates.push(...range.map((item) => item.date));

  // Helper function to format date as "YYYY-MM-DD"
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
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pagenumber, setPagenumber] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const containerRef = useRef(null);

 useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);

      const pubsRequestBody = {
        request: {
          request_id: Date.now(),
          data: {
            date: String(activeDate),
            type: "all",
            page: 1,
            country: String(countryFilter),
          },
        },
      };
      const subsrequestBody = {
        request: {
          request_id: Date.now(),
          data: {
            date: String(activeDate),
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
      const publicResponse = await publicPredictions(pubsRequestBody).unwrap();
      dispatch(
        setPublicPredictions({
          publicpredictions: publicResponse.data,
          page: 1,
        })
      );
      setTotalPages(1);


      // Fetch subscriber predictions if user is subscribed
      if (user?.is_subscribed === 1) {
        const subscriberResponse = await subscriberPredictions(subsrequestBody).unwrap();
        dispatch(
          setPublicPredictions({
            publicpredictions: subscriberResponse.data,
            page: pagenumber,
          })
        );
        setTotalPages(subscriberResponse.count);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [getCountries, activeDate, pagenumber, countryFilter, user?.is_subscribed]);

const handleCountryFilter = (countryName) => {
  setCountryFilter(countryName);
};

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const triggerPoint = scrollHeight * 0.95; // Load when 75% scrolled
  
        if (scrollTop + clientHeight >= triggerPoint) {
          setPagenumber((prev) => {
            if (prev < totalPages) {
              return prev + 1;
            }
            return prev; 
          });
        }
      }
    };
  
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [pagenumber, totalPages]);
  

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
          <div
            className="mt-5 md:mt-6 h-[95vh] overflow-scroll hide-scrollbar"
            ref={containerRef}
          >
            {/* <MatchesSection /> */}
            <h2 className="mb-2 font-bold text-[14px] max-lg:text-[12px]">
              All Matches
            </h2>
            <AllMatches
              activeDate={activeDate}
              setPagenumber={setPagenumber}
              pagenumber={pagenumber}
              loading={loading}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}