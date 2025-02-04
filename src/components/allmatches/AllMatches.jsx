"use client";
import { selectPublicPredictions } from "@/redux/reducers/publicPredictionsReducers";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function AllMatches({ activeDate }) {
  const pPredictions = useSelector(selectPublicPredictions);
  const [openMatches, setOpenMatches] = useState([0, 1, 2]);

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
        // Filter out the leagues that don't have matches for the selected date
        const filteredLeagues = Object.keys(pPredictions[country]).filter(league =>
          pPredictions[country][league].some(match => {
            const fixtureDateParts = match.fixture_date.split(",")[1]?.trim(); // Extract the date portion
            if (!fixtureDateParts) return false;

            const [day, month, year] = fixtureDateParts.split("-").map(part => part.trim()); // Split into day, month, year
            if (!day || !month || !year) return false;

            const matchDate = new Date(`${year}-${month}-${day}`);
            const formattedMatchDate = matchDate.toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
            });

            return formattedMatchDate === activeDate;
          })
        );

        // If no leagues have matches for the selected date, hide the country
        if (filteredLeagues.length === 0) return null;

        return (
          <div key={index} className="accordion  shadow-[0_2px_10px_-3px_rgba(34,197,94,0.3)] bg-white rounded-md mb-4" role="accordion">
            {/* Accordion Button */}
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className={`toggle-button w-full text-base outline-none text-left bg-green-900 font-semibold p-2  rounded-br-xl  ${
                openMatches.includes(index) ? "text-white" : "text-gray-100"
              } hover:text-gray-200 flex items-center`}
            >
              <span className="mr-4 text-[16px] lg:text-[20px] font-[700]">
                {country}
              </span>
              <div className="ml-auto b p-2 rounded-lg">
                {openMatches.includes(index) ? (
                   <svg className="w-6 h-6 transform duration-1000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                 </svg>
                
                ) : (
                  <svg className="w-6 h-6 transform duration-1000 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7"/>
                </svg>
                
                )}
              </div>
            </button>

            {/* Accordion Content */}
            <div className={`content overflow-hidden transition-all duration-300 ${openMatches.includes(index) ? "max-h-[1000px] " : "max-h-0"}`}>
              {filteredLeagues.map((league, leagueIndex) => (
                <div key={leagueIndex} className="mb-4">
                  <mark className="text-lg font-semibold text-white bg-green-900 font-serif w-auto p-2 rounded-br-xl ">{league}</mark>
                  <div className="rounded-t-lg px-2 py- mt-2 flex w-full sticky top-0 flex-grow shadow justify-between text-center text-sm items-center gap-4 bg-green-900 text-white">
        <div className="md:flex-1 text-start">Time</div>
        <div className="w-[30%] max-md:w-40%]">Team</div>
        <div className=" w-[30%] max-md:w-auto">Score</div>
        <div className="md:flex-1 ">Tip</div>
        <div className="md:flex-1 ">BestTip</div>
        <div className="md:flex-1 ">Trust</div>
      </div>
                  <div className="flex flex-col gap-4 mt-5 px-2">
                    {pPredictions[country][league]
                      .filter((match) => {
                        const fixtureDateParts = match.fixture_date.split(",")[1]?.trim(); // Extract the date portion
                        if (!fixtureDateParts) return false;

                        const [day, month, year] = fixtureDateParts.split("-").map(part => part.trim()); // Split into day, month, year
                        if (!day || !month || !year) return false;

                        const matchDate = new Date(`${year}-${month}-${day}`);
                        const formattedMatchDate = matchDate.toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                        });

                        return formattedMatchDate === activeDate;
                      })
                      .map((match, matchIndex) => (
                        <div key={matchIndex} className="rounded-md p-2 flex w-full flex-grow shadow-[0_2px_10px_-3px_rgba(34,197,94,0.3)] justify-between text-center text-sm items-center gap-4 bg-white">
                          {/* Fixture Date and Time */}
                          <div className="md:flex-1 flex flex-col items-center justify-between text-[13px] font-medium max-lg:text-[12px]">
                            {match.fixture_time ? (
                              <>
                                <p className="max-lg:text-[12px] text-[13px] max-md:hidden">
                                  {match.fixture_time || "No time available"}
                                </p>
                                <div className="md:hidden">
                                  <p className="text-[13px] max-lg:text-[12px]">{match.fixture_time.split(":")[0]}</p>
                                  <p className="text-[13px] max-lg:text-[12px]">{match.fixture_time.split(":")[1]}</p>
                                </div>
                              </>
                            ) : (
                              <p>N/A</p>
                            )}
                          </div>

                          {/* Teams */}
                          <div className="flex gap-2 flex-col w-[30%] max-md:w-[32%]">
                            {/* Home Team */}
                            <div className="flex gap-2 items-center max-lg:text-[12px] text-[13px]">
                              <Image
                                src={match?.home_team_logo || "/globe.svg"}
                                alt={match.home_team_logo || "Logo"}
                                className="w-5 h-5 rounded-full"
                                width={20}
                                height={20}
                              />
                              <span className="line-clamp-2 text-start">{match.home_team || "Home Team"}</span>
                            </div>

                            {/* Away Team */}
                            <div className="flex gap-2 items-center max-lg:text-[12px] text-[13px]">
                              <Image
                                src={match?.home_team_logo?.startsWith("http") ? match.home_team_logo : "/globe.svg"}
                                alt={match?.home_team || "Home Team Logo"}
                                className="w-5 h-5 rounded-full"
                                width={20}
                                height={20}
                              />
                              <span className="line-clamp-2 text-start">{match.away_team || "Away Team"}</span>
                            </div>
                          </div>

                          {/* Odds */}
                          <div className="w-[30%] max-md:w-auto flex flex-col gap-2 items-center text-sm font-medium max-lg:text-[12px] text-[13px]">
                            <div className="flex">
                              <p className="text-[13px] max-lg:text-[12px]">{match.home_score || ""}</p>
                              <span className={`${match.home_score ? "" : "hidden"} px-1`}>-</span>
                              <p className="text-[13px] max-lg:text-[12px]">{match.away_score || ""}</p>
                            </div>

                            <div className="flex max-md:hidden gap-4">
                              <p>1 <br /> {match.home_team_odd || "N/A"}</p>
                              <p>X <br /> {match.draw_odd || "N/A"}</p>
                              <p>2 <br /> {match.away_team_odd || "N/A"}</p>
                            </div>
                          </div>

                          {/* Tip */}
                          <div className="md:flex-1 min-w-6 text-sm font-medium max-lg:text-[12px] text-[13px]">
                            <p>{match.tip || ""}</p>
                          </div>

                          {/* Best Tip */}
                          <div className="md:flex-1 min-w-6 text-sm font-medium max-lg:text-[12px] text-[13px]">
                            <p>{match.best_tip || ""}</p>
                          </div>

                          {/* Confidence */}
                          <div className="md:flex-1 text-sm font-medium max-lg:text-[12px] text-[13px]">
                            <p className="max-lg:text-[12px] text-[13px]">{match.confidence || "N/A"}</p>
                          </div>
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
