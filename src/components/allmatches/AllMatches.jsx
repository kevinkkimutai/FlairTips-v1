'use client';
import React, { useState } from 'react'

const matches = [
    {
        quiz: 'quiz',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nunc vel pulvinar elementum, nunc felis consectetur lectus, at consectetur sapien felis et est. Donec vel neque ac neque consectetur consectetur.'
    }
]
export default function AllMatches() {
    const [openMatches, setOpenMatches] = useState([]);

    const toggleAccordion = (index) => {
      setOpenMatches((prevOpenMatches) =>
        prevOpenMatches.includes(index)
          ? prevOpenMatches.filter((i) => i !== index) 
          : [...prevOpenMatches, index] 
      );
    };
  return (
    <div>
       {matches.map((faq, index) => (
            <div key={index} className="accordion bg-blue-200 rounded-md" role="accordion">
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className={`toggle-button w-full text-base outline-none text-left font-semibold p-2 ${
                  openMatches.includes(index)
                    ? 'text-gray-800'
                    : 'text-gray-950'
                } hover:text-black flex items-center`}
              >
                <span className="mr-4 text-[16px] lg:text-[20px] font-[700] max-md:w-[95%]">{faq.quiz}</span>
                <div className="ml-auto bg-[#DDE5F8] p-2 rounded-lg">
                  {openMatches.includes(index) ? (
                    <svg
                      className="w-5 h-5  text-[#16171880]"
                      aria-hidden="true"
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
                        d="M5 12h14"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-[#16171880]"
                      aria-hidden="true"
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
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
                  )}
                </div>
              </button>
              <div
                className={`content overflow-hidden transition-all duration-300  ${
                  openMatches.includes(index) ? 'masx-h-[1000px] p-2' : 'max-h-0'
                }`}
              >
                <p className="text-[14px] lg:text-[16px] font-[400] text-gray-600  bg-blue-500 rounded-md p-1">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
    </div>
  )
}
