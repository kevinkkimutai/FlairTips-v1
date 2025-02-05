import React from "react";

export default function MatchesSection() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mt-5">
        <div className="rounded-md h-10 flex items-center justify-center shadow-[0_2px_10px_-3px_rgba(34,197,94,0.3)] bg-white">
          predicted
        </div>
        <div className="rounded-md h-10 flex items-center justify-center shadow-[0_2px_10px_-3px_rgba(34,197,94,0.3)] bg-white">
          ongoing
        </div>
        <div className="rounded-md h-10 flex items-center justify-center shadow-[0_2px_10px_-3px_rgba(34,197,94,0.3)] bg-white">
          Total Wins
        </div>
      </div>
    </div>
  );
}
