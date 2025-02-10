"use client";
import { selectCountries } from "@/redux/reducers/countryReducers";
import { selectPublicPredictions } from "@/redux/reducers/publicPredictionsReducers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AllMatches({ activeDate }) {
  const pPredictions = useSelector(selectPublicPredictions);
  const [openLeagues, setOpenLeagues] = useState([]);
  const [activeDateState, setActiveDateState] = useState(activeDate);
  const countries = useSelector(selectCountries);
  const router = useRouter();
  const BASE_IMAGE_URL = "https://cdn.nerdytips.com/";

  const viewFixture = (id) => {
    router.push(`fixture/${id}`);
  };

  useEffect(() => {
    setActiveDateState(activeDate);
  }, [activeDate]);

  const toggleLeagueAccordion = (leagueIndex) => {
    setOpenLeagues((prev) =>
      prev.includes(leagueIndex)
        ? prev.filter((i) => i !== leagueIndex)
        : [...prev, leagueIndex]
    );
  };

  if (!pPredictions || Object.keys(pPredictions).length === 0) {
    return <div>No matches available for the selected date.</div>;
  }

  return (
    <div>
      {Object.keys(pPredictions).map((country, countryIndex) => {
        const countryData = countries.data.find((c) => c.name === country);
        const countryFlag = "/kenya.svg";
        // const countryFlag = countryData?.flag || "/kenya.svg";

        const filteredLeagues = Object.keys(pPredictions[country]).filter((league) =>
          pPredictions[country][league].some((match) => {
            const fixtureDateParts = match.fixture_date.split(",")[1]?.trim();
            if (!fixtureDateParts) return false;

            const [day, month, year] = fixtureDateParts.split("-").map((part) => part.trim());
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
          <div key={countryIndex} className="shadow bg-whit rounded-md mb-4">
            <div className="flex items-center bg-green-900 text-white font-semibold p-2 rounded-t">
           
              <Image
                src={countryFlag}
                alt={`${country} Flag`}
                width={24}
                height={16}
                className="mr-4 h-4 w-6 object-contain rounded bg-whit"
              />
              <span>{country}</span>
            </div>

            {filteredLeagues.map((league, leagueIndex) => {
              const leagueKey = `${countryIndex}-${leagueIndex}`;
              return (
                <div key={leagueIndex} className="mb-2 mt-3">
                  <button
                    type="button"
                    onClick={() => toggleLeagueAccordion(leagueKey)}
                    className={`w-full text-left font-semibold p-2 rounded-t-lg bg-green-100 hover:bg-green-200 ${
                      openLeagues.includes(leagueKey) ? "text-green-800" : "text-gray-800"
                    } flex justify-between items-center`}
                  >
                    <span>{league}</span>
                    <span>{openLeagues.includes(leagueKey) ? "▲" : "▼"}</span>
                  </button>

                  <div
                    className={`transition-all overflow-hidden ${
                      openLeagues.includes(leagueKey) ? "max-h-[1000px]" : "max-h-0"
                    }`}
                  >
                    <div className="rounded--lg px-2 py-1 flex w-full sticky top-0 flex-grow shadow justify-between text-center text-sm items-center gap-4 bg-green-100 text-black">
        <div className="md:flex-1 text-start">Time</div>
        <div className="w-[30%] max-md:w-40%]">Team</div>
        <div className=" w-[30%] max-md:w-auto">Score</div>
        <div className="md:flex-1 ">Tip</div>
        <div className="md:flex-1 ">BestTip</div>
        <div className="md:flex-1 ">Trust</div>
      </div>
                    {pPredictions[country][league]
                      .filter((match) => {
                        const fixtureDateParts = match.fixture_date.split(",")[1]?.trim();
                        if (!fixtureDateParts) return false;

                        const [day, month, year] = fixtureDateParts.split("-").map((part) => part.trim());
                        const matchDate = new Date(`${year}-${month}-${day}`);
                        const formattedMatchDate = matchDate.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });

                        return formattedMatchDate === activeDateState;
                      })
                      .map((match, matchIndex) => (
                    
                        <div
                        key={matchIndex}
                        onClick={() => viewFixture(match.match_id)}
                        className="rounded-md p-2 flex w-full flex-grow shadow-[0_2px_10px_-3px_rgba(34,197,94,0.3)] justify-between text-center text-sm items-center gap-4 bg-white mt-2"
                      >
                        {/* Fixture Date and Time */}
                        <div className="md:flex-1 flex flex-col items-center justify-between text-[13px] font-medium max-lg:text-[12px]">
                          {match.fixture_time ? (
                            <>
                              <p className="max-lg:text-[12px] text-[13px] max-md:hidden">
                                {match.fixture_time || "No time available"}
                              </p>
                              <div className="md:hidden">
                                <p className="text-[13px] max-lg:text-[12px]">
                                  {match.fixture_time.split(":")[0]}
                                </p>
                                <p className="text-[13px] max-lg:text-[12px]">
                                  {match.fixture_time.split(":")[1]}
                                </p>
                              </div>
                            </>
                          ) : (
                            <p>No time available</p>
                          )}
                        </div>
  
                        {/* Teams */}
                        <div className="flex gap-2 flex-col w-[30%] max-md:w-[32%] ">
                          {/* Home Team */}
                          <div className="flex gap-2 items-center max-lg:text-[12px] text-[13px]">
                          <Image
                              src={
                                match?.home_team_logo?.startsWith("http")
                                  ? match.home_team_logo
                                   : "globe.svg"
                              }
                              alt={match.home_team || "Home Team Logo"}
                              className="w-5 h-5 rounded-full"
                              width={20}
                              height={20}
                            />
                            <span className="line-clamp-2 text-start">
                              {match.home_team || "Home Team"}
                            </span>
                          </div>
  
                          {/* Away Team */}
                          <div className="flex gap-2 items-center max-lg:text-[12px] text-[13px]">
                       
                          <Image
                              src={
                                match?.away_team_logo?.startsWith("http")
                                  ? match.away_team_logo
                                  : "globe.svg"
                              }
                              alt={match.home_team || "Home Team Logo"}
                              className="w-5 h-5 rounded-full"
                              width={20}
                              height={20}
                            />
                            <span className="line-clamp-2 text-start">
                              {match.away_team || "Away Team"}
                            </span>
                          </div>
                        </div>
  
                        {/* Odds */}
                        <div className="w-[30%] max-md:w-auto flex  flex-col gap-2 items-center text-sm font-medium max-lg:text-[12px] text-[13px]">
                          <div className="flex">
                            <p className="text-[13px] max-lg:text-[12px]">
                              {match.home_score || ""}
                            </p>
                            <span className={`${match.home_score ? "" : "hiden"} px-1`}>-</span>
                            <p className="text-[13px] max-lg:text-[12px]">
                             {match.away_score || ""}
                            </p>
                          </div>
  
                          <div className="flex max-md:hidden gap-4">
                            <p>
                              1 <br /> {match.home_team_odd || "N/A"}
                            </p>
                            <p>
                              X <br /> {match.draw_odd || "N/A"}
                            </p>
                            <p>
                              2 <br /> {match.away_team_odd || "N/A"}
                            </p>
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
                          <p className="max-lg:text-[12px] text-[13px]">
                            {match.confidence || "N/A"}
                          </p>
                          
                        </div>
                      </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}