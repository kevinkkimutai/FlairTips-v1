"use client";
import { selectUser } from "@/redux/reducers/AuthReducers";
import React from "react";
import { useSelector } from "react-redux";

export default function MobileBottomBar() {
  const user = useSelector(selectUser);

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-green-900 border-t border-gray-200 ">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <a
          href="/"
          className="inline-flex flex-col items-center justify-center rounded px-5 hover:bg-green-100  group"
        >
          <svg
            className="w-5 h-5 mb-2 text-white group-hover:text-green-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="text-xs text-white group-hover:text-green-600 ">
            Home
          </span>
        </a>
        <a
          href="/all-matches"
          className="inline-flex flex-col items-center justify-center rounded px-5 hover:bg-green-100  group"
        >
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
   className="w-5 h-5 mb-2 text-white group-hover:text-green-600 "
  fill="currentColor"
>
  <path
    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.38 13.94-2.52 1.88c-.14.11-.33.11-.48 0l-2.52-1.88-.78 3.02c-.04.17-.19.3-.37.3h-3.46c-.18 0-.33-.13-.37-.3l-.78-3.02-2.52 1.88c-.15.11-.34.11-.48 0l-2.52-1.88c-.12-.09-.16-.26-.08-.4l1.88-2.52-3.02-.78c-.17-.04-.3-.19-.3-.37v-3.46c0-.18.13-.33.3-.37l3.02-.78-1.88-2.52c-.08-.14-.04-.31.08-.4l2.52-1.88c.14-.11.33-.11.48 0l2.52 1.88.78-3.02c.04-.17.19-.3.37-.3h3.46c.18 0 .33.13.37.3l.78 3.02 2.52-1.88c.15-.11.34-.11.48 0l2.52 1.88c.12.09.16.26.08.4l-1.88 2.52 3.02.78c.17.04.3.19.3.37v3.46c0 .18-.13.33-.3.37l-3.02.78 1.88 2.52c.08.14.04.31-.08.4z"
  />
</svg>

          <span className="text-xs text-white group-hover:text-green-600 ">
            All Fixes
          </span>
        </a>
        <a
          href="/"
          className="inline-flex flex-col items-center justify-center rounded px-5 hover:bg-green-100  group"
        >
          <svg
            className="w-5 h-5 mb-2 text-white group-hover:text-green-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
            />
          </svg>
          <span className="text-xs text-white group-hover:text-green-600 ">
            Settings
          </span>
        </a>
        {user ? (
          <a
            href="/profile"
            className="inline-flex flex-col items-center justify-center rounded px-5 hover:bg-green-100  group"
          >
            <svg
              className="w-5 h-5 mb-2 text-white group-hover:text-green-600 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span className="text-xs text-white group-hover:text-green-600 ">
              Profile
            </span>
          </a>
        ) : (
          <a
            href="/login"
            className="inline-flex flex-col items-center justify-center rounded px-5 hover:bg-green-100  group"
          >
            <svg
              className="w-5 h-5 mb-2 text-white group-hover:text-green-600 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span className="text-xs text-white group-hover:text-green-600 ">
             LogIn
            </span>
          </a>
        )}
       
      </div>
    </div>
  );
}
