import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const RentingCard = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);


  const handleStartDateChange = (date) => {
    setStartDate(date);
    setTotalPrice(calculatePrice(date, endDate));
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setTotalPrice(calculatePrice(startDate, date));
    console.log(date)
  };

  const calculatePrice = (start, end) => {
    if (start && end) {
      const days = Math.round((end - start) / (1000 * 60 * 60 * 24));
      console.log(days)
      return days * 150;
    }
    return 0;
  };

  return (
    <>
    <div className="sticky top-0 border-2 p-3">
      <h3 className="text-xl mb-2">Rent</h3>
      <div className='flex border-2'>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="start-date">
            Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            className="block w-full bg-white rounded-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="start-date">
            End Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            className="block w-full bg-white rounded-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Rent
      </button>
    </div>
    </>
  )
}

export default RentingCard
