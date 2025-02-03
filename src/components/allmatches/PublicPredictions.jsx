"use client";
import { selectPublicPredictions } from "@/redux/reducers/publicPredictionsReducers";
import { useSelector } from "react-redux";
import Image from "next/image";
import React, { useEffect } from "react";

export default function PublicPredictions({ activeDate, setPagenumber, pagenumber }) {
  const pPredictions = useSelector(selectPublicPredictions);
  console.log("publicPredictions", pPredictions);

  const handlePageChange = (newPageNumber) => {
    setPagenumber(newPageNumber); 
  };

  return (
    <div className="p- flex flex-col gap-4">
      {/* Header Row */}
      <div className="rounded-t-lg px-2 py-4 flex w-full sticky top-0 flex-grow shadow justify-between text-center text-sm items-center gap-4 bg-blue-950 text-white">
        <div className="md:flex-1 text-start">Time</div>
        <div className="w-[30%] max-md:w-[50%]">Team</div>
        <div className=" w-[30%] max-md:w-auto">Score</div>
        <div className="md:flex-1 ">Tip</div>
        <div className="md:flex-1 ">Trust</div>
      </div>

      {pPredictions && pPredictions.data ? (
        Object.entries(pPredictions.data).map(([outerKey, nestedObj]) =>
          Object.entries(nestedObj || {}).map(([innerKey, matches]) =>
            Array.isArray(matches)
              ? matches
                  // Filter matches by activeDate
                  .filter((match) => {
                    const fixtureDateParts = match.fixture_date.split(",")[1]?.trim();
                    if (!fixtureDateParts) return false;

                    const [day, month, year] = fixtureDateParts.split("-"); 
                    const formattedMatchDate = new Date(`${year}-${month}-${day}`).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    });

                    return formattedMatchDate === activeDate; 
                   
                    
                  })
               
                  .map((match) => (
                    <div
                      key={match.match_id}
                      className="rounded-md p-2 flex w-full flex-grow shadow justify-between text-center text-sm items-center gap-4 bg-white"
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
                      <div className="flex gap-2 flex-col w-[30%] max-md:w-[50%]">
                        {/* Home Team */}
                        <div className="flex gap-2 items-center max-lg:text-[12px] text-[13px]">
                          <Image
                            src={match.home_team_logo || "/globe.svg"}
                            alt={`${match.home_team} Logo`}
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
                            src={match.away_team_logo || "/globe.svg"}
                            alt={`${match.away_team} Logo`}
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
                      <div className="w-[30%] max-md:w-auto flex flex-col gap-2 items-center text-sm font-medium max-lg:text-[12px] text-[13px]">
                        <div className="flex">
                          <p className="text-[13px] max-lg:text-[12px]">
                            {match.home_score || "- : -"}
                          </p>
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
                  ))
              :   null
          )
        )
      ) : (
        <p className="text-black">No predictions available</p>
      )}

      {/* Pagination buttons */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handlePageChange(pagenumber - 1)}
          disabled={pagenumber <= 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => handlePageChange(pagenumber + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
