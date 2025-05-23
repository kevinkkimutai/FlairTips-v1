"use client";

import { selectCountries } from "@/redux/reducers/countryReducers";
import { selectPublicPredictions } from "@/redux/reducers/publicPredictionsReducers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { parse, format } from "date-fns";

export default function AllMatches({ activeDate, loading }) {
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
    if (pPredictions) {
      let totalMatches = 0;

      // Iterate over each page's data
      pPredictions.forEach((pageData) => {
        Object.values(pageData).forEach((leagues) => {
          Object.values(leagues).forEach((matches) => {
            totalMatches += matches.length;
          });
        });
      });

    }
  }, [pPredictions]);

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

  if (loading) {
    return (
      <div>
        {/* Skeleton Loader */}
        <div className="animate-pulse">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="mb-4 shadow bg-gray-200 rounded-md">
              <div className="h-12 bg-gray-300 rounded-t-md"></div>
              <div className="p-4 space-y-3">
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-5 bg-gray-300 rounded"></div>
                <div className="h-5 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!pPredictions || pPredictions.length === 0) {
    return <div>No matches available for the selected date.</div>;
  }

  return (
    <div>
      {/* Iterate over each page's data */}
      {pPredictions.map((pageData, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {/* Iterate over each country in the page's data */}
          {Object.keys(pageData).map((country, countryIndex) => {
            const countryData = countries?.data?.find((c) => c.name === country);
            const countryFlag = countryData?.flag || "/kenya.svg";

            // Filter leagues based on the active date
            const filteredLeagues = Object.keys(pageData[country]).filter((league) =>
              pageData[country][league].some((match) => {
                const fixtureDateParts = match?.fixture_date.split(",")[1]?.trim();
                if (!fixtureDateParts) return false;

                try {
                  // Parse the match date
                  const matchDate = parse(fixtureDateParts, "dd-MM-yyyy", new Date());
                  const formattedMatchDate = format(matchDate, "MMM d");
                  const formattedActiveDate = format(new Date(activeDateState), "MMM d");

                  return formattedMatchDate === formattedActiveDate;
                } catch (error) {
                  console.error("Date Parsing Error:", error);
                  return false;
                }
              })
            );

            if (filteredLeagues.length === 0) return null;

            return (
              <div key={countryIndex} className="shadow md:bg-white rounded-md mb-4">
                <div className="flex items-center bg-green-900 text-white p-2 rounded-t">
                  <Image
                    src={countryFlag}
                    alt={`${country} Flag`}
                    width={24}
                    height={16}
                    className="mr-4 h-4 w-6 object-contain rounded"
                  />
                  <span>{country}</span>
                </div>

                {filteredLeagues.map((league, leagueIndex) => {
                  const leagueKey = `${countryIndex}-${leagueIndex}`;
                  return (
                    <div key={leagueIndex} className="mb-2 mt-3 py-2">
                      <button
                        type="button"
                        onClick={() => toggleLeagueAccordion(leagueKey)}
                        className={`w-full text-left text-gray-600 p-2 rounded-t-lg bg-green-100 hover:bg-green-200 ${
                          openLeagues.includes(leagueKey) ? "text-green-800" : "text-gray-800"
                        } flex justify-between items-center`}
                      >
                        <span>{league}</span>
                      </button>

                      <div
                        className={`transition-all overflow-hidden max-h-[1000px] ${
                          openLeagues.includes(leagueKey) ? "max-h-[1000px]" : "max-h-0"
                        }`}
                      >
                        <div className="rounded-lg max-md:hidden px-2 py-1 flex w-full sticky top-0 text-[13px] flex-grow shadow justify-between text-center text-sm items-center gap-4 bg-green-100 text-black">
                          <div className="md:flex-1 max-md:hidden text-start">Time</div>
                          <div className="w-[30%] max-md:w-[40%] max-md:text-start">Team</div>
                          <div className="w-[30%] max-md:flex-1 max-md:text-start">Score</div>
                          <div className="md:flex-1 max-md:hidden">Tip</div>
                          <div className="flex-1 max-md:text-start">Best Tip</div>
                          <div className="md:flex-1">Trust</div>
                        </div>

                        {pageData[country][league]
                          .filter((match) => {
                            const fixtureDateParts = match?.fixture_date.split(",")[1]?.trim();
                            if (!fixtureDateParts) return false;

                            try {
                              const matchDate = parse(fixtureDateParts, "dd-MM-yyyy", new Date());
                              const formattedMatchDate = format(matchDate, "MMM d");
                              const formattedActiveDate = format(new Date(activeDateState), "MMM d");

                              return formattedMatchDate === formattedActiveDate;
                            } catch (error) {
                              console.error("Date Parsing Error:", error);
                              return false;
                            }
                          })
                          .map((match, matchIndex) => (
                            <div
                              key={matchIndex}
                              className="rounded-md p-2 flex flex-col w-full flex-grow shadow-[0_2px_10px_-3px_rgba(34,197,94,0.5)] text-center text-sm items-center gap-4 bg-white mt-2"
                            >
                              <div className="flex text-[13px] items-center justify-start w-full md:hidden font-medium max-lg:text-[12px]">
                                <p className="max-lg:text-[12px] text-[12px] text-start">
                                  {match?.fixture_date || "No time available"}
                                </p>
                              </div>
                              <div
                                onClick={() => viewFixture(match.match_id)}
                                className="flex w-full flex-grow justify-between text-center text-sm md:items-center gap-4"
                              >
                                {/* Fixture Date and Time */}
                                <div className="md:flex-1 max-md:hidden flex flex-col items-center justify-between text-[13px] font-medium max-lg:text-[12px]">
                                  {match.fixture_time ? (
                                    <>
                                      <p className="max-lg:text-[12px] text-[12px] max-md:hidden">
                                        {match.fixture_time || "No time available"}
                                      </p>
                                      <div className="md:hidden">
                                        <p className="text-[12px] max-lg:text-[12px]">
                                          {match.fixture_time.split(":")[0]}
                                        </p>
                                        <p className="text-[12px] max-lg:text-[12px]">
                                          {match.fixture_time.split(":")[1]}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <p>No time available</p>
                                  )}
                                </div>

                                <div className="flex gap-2 max-md:gap-4 flex-col w-[30%] max-md:w-[50%]">
                                  <div className="flex gap-2 items-center max-md:text-start">
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
                                    <span className="text-[13px]">{match.home_team || "Home Team"}</span>
                                  </div>

                                  <div className="flex gap-2 items-center max-md:text-start">
                                    <Image
                                      src={
                                        match?.away_team_logo?.startsWith("http")
                                          ? match.away_team_logo
                                          : "globe.svg"
                                      }
                                      alt={match.away_team || "Away Team Logo"}
                                      className="w-5 h-5 rounded-full"
                                      width={20}
                                      height={20}
                                    />
                                    <span className="text-[13px]">{match.away_team || "Away Team"}</span>
                                  </div>
                                </div>

                                <div className="w-[30%] max-md:w-auto flex flex-col gap-2 items-center max-md:hidden">
                                  <div className="flex text-[12px] max-lg:text-[12px]">
                                    <p>{match.home_score || ""}</p>
                                    <span>{match.home_score ? "-" : ""}</span>
                                    <p>{match.away_score || ""}</p>
                                  </div>
                                  <div className="flex max-md:hidden gap-4">
                                    <div className="flex flex-col text-sm gap-1">
                                      <p className="text-[12px]">1</p>
                                      <p className="text-[12px] text-center text-gray-600">{match.home_team_odd}</p>
                                    </div>
                                    <div className="flex flex-col text-sm items-center text-center gap-1">
                                      <p className="text-[12px]">X</p>
                                      <p className="text-[12px] flex-col text-gray-600">{match.draw_odd}</p>
                                    </div>
                                    <div className="flex flex-col text-sm gap-1">
                                      <p className="text-[12px]">2</p>
                                      <p className="text-gray-600 text-[12px]">{match.away_team_odd}</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="md:flex-1 text-[12px] max-md:hidden">{match.tip || ""}</div>
                                <div className="md:flex-1 text-[12px] max-md:hidden">{match.best_tip || ""}</div>
                                <div className="md:flex-1 text-[12px] max-md:hidden">{match.confidence || "N/A"}</div>

                                <div className="flex md:hidden gap-2">
                                  <div className="flex flex-col text-sm gap-1">
                                    <p className="text-sm">1</p>
                                    <p className="ms-2 text-[14px] max-lg:text-[12px] text-gray-600">{match.home_team_odd}</p>
                                  </div>
                                  <div className="flex flex-col text-sm items-center text-center gap-1">
                                    <p className="text-sm">X</p>
                                    <p className="ms-2 text-[14px] max-lg:text-[12px] flex-col text-gray-600">{match.draw_odd}</p>
                                  </div>
                                  <div className="flex flex-col text-sm gap-1">
                                    <p className="text-sm">2</p>
                                    <p className="ms-2 text-[14px] max-lg:text-[12px] text-gray-600">{match.away_team_odd}</p>
                                  </div>
                                </div>
                              </div>
                              <hr className="w-full md:hidden" />
                              <div className="w-full text-start flex gap-10 md:hidden">
                                <div className="text-[14px] max-lg:text-[12px]">
                                  <span className="font-bold text-[14px] max-lg:text-[12px]">Tip : </span>
                                  {match.tip || ""}
                                </div>
                                <div className="text-[14px] max-lg:text-[12px]">
                                  <span className="font-bold text-[14px] max-lg:text-[12px]">Best Tip : </span>
                                  {match.best_tip || ""}
                                </div>
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
        </React.Fragment>
      ))}
    </div>
  );
}