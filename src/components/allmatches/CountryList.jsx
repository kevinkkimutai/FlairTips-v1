'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { selectCountries } from '@/redux/reducers/countryReducers'

export default function CountryList({handleCountryFilter}) {
  const countries = useSelector(selectCountries) 

  console.log("CountryList", countries);
  

  return (
    <div className="flex flex-col gap-4 md:sticky md:top-0  overflow-scroll bg-white hide-scrollba">
      <div
          className="flex items-center justify-center gap-4 md:sticky text-[12px] max-lg:text-[14px] font-bold md:top-2 text-white bg-green-900 p-4 rounded-t-lg shadow-md hover:shadow-lg mt- mb-2 transition-shadow"
        >
          COUNTRIES
        </div>
        <div className='overflow-scroll max-h-[95vh] flex flex-col  gap-4'>
      {countries?.map((country) => (
        <div
          key={country.id}
          onClick={() => handleCountryFilter(country.id)}
          className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          {/* Country Flag */}
          <div className="w-10 ">
            {country.flag ? (
              <img
                src={country.flag}
                alt={`${country.name} Flag`}
                className="object-cover w-full h-full rounded-md"
              />
            ) : (
              <div className="bg-white w-full h-full rounded-md flex items-center justify-center text-[14px] max-lg:text-[12px] text-gray-500">
                No Flag
              </div>
            )}
          </div>

          {/* Country Name */}
          <div className="text-[14px] max-lg:text-[12px] font-semibold text-gray-700">{country.name}</div>
        </div>
      ))}
      </div>
    </div>
  )
}
