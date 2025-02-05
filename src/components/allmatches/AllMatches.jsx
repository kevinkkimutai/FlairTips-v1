"use client";
import { selectCountries } from "@/redux/reducers/countryReducers";
import { selectPublicPredictions } from "@/redux/reducers/publicPredictionsReducers";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AllMatches({ activeDate }) {
  const pPredictions = useSelector(selectPublicPredictions);
  const [openMatches, setOpenMatches] = useState([0, 1, 2]);
  const [activeDateState, setActiveDateState] = useState(activeDate);
  const countries = useSelector(selectCountries);

  useEffect(() => {
    setActiveDateState(activeDate);
  }, [activeDate]);

  const toggleAccordion = (index) => {
    setOpenMatches((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!pPredictions || Object.keys(pPredictions).length === 0) {
    return <div>No matches available for the selected date.</div>;
  }

  return (
    <div>
      {Object.keys(pPredictions).map((country, index) => {
        const countryData = countries.data.find((c) => c.name === country);
        const countryFlag = countryData?.flag || "/kenya.svg";

        const filteredLeagues = Object.keys(pPredictions[country]).filter((league) =>
          pPredictions[country][league].some((match) => {
            const fixtureDateParts = match.fixture_date.split(",")[1]?.trim();
            if (!fixtureDateParts) return false;

            const [day, month, year] = fixtureDateParts.split("-").map((part) => part.trim());
            if (!day || !month || !year) return false;

            const matchDate = new Date(`${year}-${month}-${day}`);
            const formattedMatchDate = matchDate.toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
            });

            return formattedMatchDate === activeDateState;
          })
        );

        if (filteredLeagues.length === 0) return null;

        return (
          <div
            key={index}
            className="accordion shadow-[0_2px_10px_-3px_rgba(34,197,94,0.3)] bg-white rounded-md mb-4"
            role="accordion"
          >
            {/* Accordion Header */}
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className={`toggle-button w-full text-base outline-none text-left bg-green-900 font-semibold p-2 rounded-br-xl ${
                openMatches.includes(index) ? "text-white" : "text-gray-100"
              } hover:text-gray-200 flex items-center`}
            >
              <Image
                src={countryFlag}
                alt={`${country} Flag`}
                width={24}
                height={16}
                className="mr-4 object-contain rounded bg-white"
              />
              <span className="mr-4 text-[16px] lg:text-[20px] font-[700]">{country}</span>
              <div className="ml-auto p-2 rounded-lg">
                {openMatches.includes(index) ? (
                  <svg
                    className="w-6 h-6 transform duration-1000"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 transform duration-1000 rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                )}
              </div>
            </button>

            {/* Accordion Content */}
            <div
              className={`content overflow-hidden transition-all duration-300 ${
                openMatches.includes(index) ? "max-h-[1000px] overflow-scroll" : "max-h-0"
              }`}
            >
              {filteredLeagues.map((league, leagueIndex) => (
                <div key={leagueIndex} className="mb-4">
                  <mark className="text-lg font-semibold text-white bg-green-900 font-serif w-auto p-2 rounded-br-xl">
                    {league}
                  </mark>
                  <div className="rounded-t-lg px-2 py-2 mt-2 flex w-full sticky top-0 flex-grow shadow justify-between text-center text-sm items-center gap-4 bg-green-900 text-white">
                    <div className="md:flex-1 text-start">Time</div>
                    <div className="w-[30%] max-md:w-40%">Team</div>
                    <div className="w-[30%] max-md:w-auto">Score</div>
                    <div className="md:flex-1">Tip</div>
                    <div className="md:flex-1">BestTip</div>
                    <div className="md:flex-1">Trust</div>
                  </div>
                  {/* Matches List */}
                  <div className="flex flex-col gap-4 mt-5 px-2">
                    {pPredictions[country][league]
                      .filter((match) => {
                        const fixtureDateParts = match.fixture_date.split(",")[1]?.trim();
                        if (!fixtureDateParts) return false;

                        const [day, month, year] = fixtureDateParts.split("-").map((part) => part.trim());
                        if (!day || !month || !year) return false;

                        const matchDate = new Date(`${year}-${month}-${day}`);
                        const formattedMatchDate = matchDate.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });

                        const formattedActiveDate = new Date(activeDateState).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });

                        return formattedMatchDate === formattedActiveDate;
                      })
                      .map((match, matchIndex) => (
                        <div
                          key={matchIndex}
                          className="rounded-md p-2 flex w-full flex-grow shadow-[0_2px_10px_-3px_rgba(34,197,94,0.3)] justify-between text-center text-sm items-center gap-4 bg-white"
                        >
                          {/* Match Details */}
                          <div className="md:flex-1">{match.fixture_time || "N/A"}</div>
                          {/* Add other match details */}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
