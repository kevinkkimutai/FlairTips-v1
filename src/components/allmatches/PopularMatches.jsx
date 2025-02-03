'use client';
import { selectPublicPredictions } from "@/redux/reducers/publicPredictionsReducers";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function PopularMatches() {
  const pPredictions = useSelector(selectPublicPredictions);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-md:hidden">
        {pPredictions && pPredictions.data ? (
          Object.entries(pPredictions.data).map(([outerKey, nestedObj]) =>
            Object.entries(nestedObj || {}).map(([innerKey, matches]) =>
              Array.isArray(matches)
                ? matches
                    .slice(0, 6)
                    .map((match) => (
                      <div
                        key={match.match_id}
                        className="rounded-xl  gap-2 flex flex-col bg-white shadow-[0_2px_10px_-3px_rgba(34,197,94,0.3)]"
                      >
                        <div className={`${match.playing == "Upcoming" ? "bg-green-100" : "bg-red-100"} flex  rounded-b-xl px-2 shadow top-0 mx-auto`}>
                          {match.playing}
                        </div>
                        <div className=" h-full  p-2 ">
                        <div className="grid grid-cols-3 items-center justify-cente gap-2 ">
                        {/* Home Team */}
                        <div className="flex flex-col gap-2 items-center max-lg:text-[12px] text-[13px]">
                          <Image
                            src={match.home_team_logo || "/globe.svg"}
                            alt={`${match.home_team} Logo`}
                            className="w-10 h-10 rounded-full"
                            width={20}
                            height={20}
                          />
                          <span className="line-clamp-2 text-center">
                            {match.home_team || "Home Team"}
                          </span>
                        </div>
                        <div className={`${match.playing == "Upcoming" ? "flex" : "hidden"} font-bold items-center text-center justify-center`}>
                        {match.fixture_time}
                        </div>
                        <div className={` ${match.playing == "Upcoming" ? "hidden" : "flex"} itemxs-center justify-center`}>
                          <p className="text-[13px] max-lg:text-[12px]  font-bold">
                            {match.home_score || "- : -"}
                          </p>
                          <p className="text-[13px] max-lg:text-[12px]">
                            {match.away_score || ""}
                          </p>
                        </div>

                        {/* Away Team */}
                        <div className="flex gap-2 flex-col items-center max-lg:text-[12px] text-[13px]">
                          <Image
                            src={match.away_team_logo || "/globe.svg"}
                            alt={`${match.away_team} Logo`}
                            className="w-10 h-10 rounded-full"
                            width={20}
                            height={20}
                          />
                          <span className="line-clamp-2 text-center">
                            {match.away_team || "Away Team"}
                          </span>
                        </div>
                      </div>
                        </div>
                      </div>
                    ))
                : null
            )
          )
        ) : (
          <p className="text-black">No predictions available</p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:hidden">
        {pPredictions && pPredictions.data ? (
          Object.entries(pPredictions.data).map(([outerKey, nestedObj]) =>
            Object.entries(nestedObj || {}).map(([innerKey, matches]) =>
              Array.isArray(matches)
                ? matches
                    .slice(0, 4)
                    .map((match) => (
                      <div
                        key={match.match_id}
                        className="rounded-xl  gap-2 flex flex-col bg-white shadow-[0_2px_10px_-3px_rgba(34,197,94,0.3)]
"
                      >
                        <div className={`${match.playing == "Upcoming" ? "bg-green-100" : "bg-red-100"} flex  rounded-b-xl px-2 shadow top-0 mx-auto`}>
                          {match.playing}
                        </div>
                        <div className=" h-full  p-2 ">
                        <div className="grid grid-cols-3 items-center justify-cente gap-2 ">
                        {/* Home Team */}
                        <div className="flex flex-col gap-2 items-center max-lg:text-[12px] text-[13px]">
                          <Image
                            src={match.home_team_logo || "/globe.svg"}
                            alt={`${match.home_team} Logo`}
                            className="w-10 h-10 rounded-full"
                            width={20}
                            height={20}
                          />
                          <span className="line-clamp-2 text-center">
                            {match.home_team || "Home Team"}
                          </span>
                        </div>
                        <div className={`${match.playing == "Upcoming" ? "flex" : "hidden"} font-bold items-center text-center justify-center`}>
                        {match.fixture_time}
                        </div>
                        <div className={` ${match.playing == "Upcoming" ? "hidden" : "flex"} itemxs-center justify-center`}>
                          <p className="text-[13px] max-lg:text-[12px]  font-bold">
                            {match.home_score || "- : -"}
                          </p>
                          <p className="text-[13px] max-lg:text-[12px]">
                            {match.away_score || ""}
                          </p>
                        </div>

                        {/* Away Team */}
                        <div className="flex gap-2 flex-col items-center max-lg:text-[12px] text-[13px]">
                          <Image
                            src={match.away_team_logo || "/globe.svg"}
                            alt={`${match.away_team} Logo`}
                            className="w-10 h-10 rounded-full"
                            width={20}
                            height={20}
                          />
                          <span className="line-clamp-2 text-center">
                            {match.away_team || "Away Team"}
                          </span>
                        </div>
                      </div>
                        </div>
                      </div>
                    ))
                : null
            )
          )
        ) : (
          <p className="text-black">No predictions available</p>
        )}
      </div>
    </div>
  );
}
