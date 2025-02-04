'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { selectCountries } from '@/redux/reducers/countryReducers'

export default function CountryList() {
  const countries = useSelector(selectCountries) 

  return (
    <div className="flex flex-col gap-4 sticky top-0 ">
      {countries?.data?.map((country) => (
        <div
          key={country.id}
          className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          {/* Country Flag */}
          <div className="w-16 h-10">
            {country.flag ? (
              <img
                src={country.flag}
                alt={`${country.name} Flag`}
                className="object-cover w-full h-full rounded-md"
              />
            ) : (
              <div className="bg-white w-full h-full rounded-md flex items-center justify-center text-sm text-gray-500">
                No Flag
              </div>
            )}
          </div>

          {/* Country Name */}
          <div className="text-lg font-semibold text-gray-700">{country.name}</div>
        </div>
      ))}
    </div>
  )
}
