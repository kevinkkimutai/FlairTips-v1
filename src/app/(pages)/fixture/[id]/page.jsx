"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { selectFixtureDetails } from "@/redux/reducers/fixtureDetailsReducers";
import { useParams } from "next/navigation";
import { useGetFixtureDetailsMutation } from "@/redux/actions/fixtureDetails";
import { setFixtureDetails } from "@/redux/reducers/fixtureDetailsReducers";

export default function MatchDetails() {
  const fixtureDetails = useSelector(selectFixtureDetails);
  const [fixDetails] = useGetFixtureDetailsMutation();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const requestBody = {
          request: {
            request_id: Date.now(),
            data: {
              id: String(id),
            },
          },
        };

        const response = await fixDetails(requestBody).unwrap();
        console.log("Fixture Details:", response.data);
        dispatch(setFixtureDetails(response.data));
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch fixture details:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [fixDetails, dispatch, id]);

  const formatTime = (time) => {
    if (!time) return "N/A";
    const [hour, minute] = time.split(":");
    return `${(hour % 12) || 12}:${minute} ${hour >= 12 ? "PM" : "AM"}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!fixtureDetails) {
    return <div>No match details available.</div>;
  }

  const matchData = {
    matchId: fixtureDetails?.match_id,
    country: fixtureDetails?.country,
    date: fixtureDetails?.date,
    league: {
      name: fixtureDetails?.league_name,
      logo: fixtureDetails?.league_logo || "/globe.svg",
    },
    playingStatus: fixtureDetails?.playing,
    homeTeam: {
      name: fixtureDetails?.home_team,
      logo: fixtureDetails?.home_team_logo || "/globe.svg",
      score: fixtureDetails?.home_score,
    },
    awayTeam: {
      name: fixtureDetails?.away_team,
      logo: fixtureDetails?.away_team_logo || "/globe.svg",
      score: fixtureDetails?.away_score,
    },
    fixture: {
      dateTime: fixtureDetails?.fixture_date,
      time: formatTime(fixtureDetails?.fixture_time),
    },
    odds: {
      homeWin: fixtureDetails?.home_team_odd,
      draw: fixtureDetails?.draw_odd,
      awayWin: fixtureDetails?.away_team_odd,
    },
    prediction: {
      goalPrediction: fixtureDetails?.goal_prediction,
      bttsScore: fixtureDetails?.btts_score,
      confidence: fixtureDetails?.confidence,
    },
    tip: {
      bestTip: fixtureDetails?.best_tip,
      tip: fixtureDetails?.tip,
    },
    stats: {
      goals: {
        home: fixtureDetails?.goals_home,
        away: fixtureDetails?.goals_away,
      },
      isPlayed: fixtureDetails?.is_played,
      isScoreUpdated: fixtureDetails?.is_score_updated,
    },
  };

  return (
    <div className="container lg:w-[80%] mx-auto md:p-4">
      <div className="bg-white shadow-md rounded-lg p-6 relative max-md:mt-4">
        {/* Match Header */}
        <div className="flex justify-between items-center mb-6 max-md:mt-6">
          <div className="flex flex-col items-center w-[40%] justify-center gap-4">
            <Image
              src={matchData.homeTeam.logo}
              alt={matchData.homeTeam.name}
              width={100}
              height={100}
              className="rounded-full h-[100px] w-[100px] object-cover"
            />
            <span className="text-[14px] md:text-[16px] text-center font-semibold">{matchData.homeTeam.name}</span>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold text-black">VS</p>
            <p className="text-sm text-gray-500">{matchData.fixture.time}</p>
          </div>

          <div className="flex flex-col w-[40%] justify-center items-center gap-4">
            <Image
              src={matchData.awayTeam.logo}
              alt={matchData.awayTeam.name}
              width={100}
              height={100}
              className="rounded-full shadow h-[100px] object-cover w-[100px]"
            />
            <span className="text-[14px] md:text-[16px] text-center font-semibold">{matchData.awayTeam.name}</span>
          </div>
        </div>

        {/* League Info */}
        <div className="text-center mb-6">
        
          <mark className="text-[14px] md:text-[16px] bg-green-900 px-2 text-white rounded-b-lg font-semibold absolute right-[34%] md:right-[39%] top-0">{matchData.league.name}</mark>
        </div>

        {/* Odds Section */}
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div className="bg-green-100 p-4 rounded-md">
            <p className="text-sm text-gray-500">Home Win</p>
            <p className="font-semibold">{matchData.odds.homeWin}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-md">
            <p className="text-sm text-gray-500">Draw</p>
            <p className="font-semibold">{matchData.odds.draw}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-md">
            <p className="text-sm text-gray-500">Away Win</p>
            <p className="font-semibold">{matchData.odds.awayWin}</p>
          </div>
        </div>

        {/* Predictions */}
        <div className="bg-gray-50 py-2 rounded-md">
          <h2 className="text-[14px] md:text-[16px] font-semibold mb-4">Match Predictions</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Goal Prediction</p>
              <p>{matchData.prediction.goalPrediction}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">BTTS Score</p>
              <p>{matchData.prediction.bttsScore}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Confidence</p>
              <p>{matchData.prediction.confidence}</p>
            </div>
          </div>
          
        </div>

        {/* Match Tips */}
        <div className="bg-gray-50 py-2 rounded-md mt-4">
          <h2 className="text-[14px] md:text-[16px] font-semibold mb-4">Match Tips</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Best Tip</p>
              <p> {matchData.tip.bestTip}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Tip</p>
              <p>{matchData.tip.tip}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
