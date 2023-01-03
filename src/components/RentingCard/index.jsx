import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import axios from 'axios';

const RentingCard = ({user_id, price, item_id}) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [days, setDays] = useState(1)
  const [totalDaysPrice, setTotalDaysPrice] = useState(0)
  const [fee, setFee] = useState(10)
  const [totalPrice, setTotalPrice] = useState(0);

  //Function to set the starting date when choosed.
  const handleStartDateChange = (date) => {
    setStartDate(date);
    //Run calculatePrice if the start date is changed.
    setTotalPrice(calculatePrice(date, endDate));
  };
  //Function to set the ending date when choosed.
  const handleEndDateChange = (date) => {
    setEndDate(date);
    //Run calculatePrice if the end date is changed.
    setTotalPrice(calculatePrice(startDate, date));
  };
  //Calculate the price for the total amount of days times the price of the item.
  const calculatePrice = (start, end) => {
    //If the user picked a starting and an ending date then run, else return 0.
    if (start && end) {
      //Calculate the number of days between then starting date and the ending date.
      const numberOfDays = Math.round((end - start) / (1000 * 60 * 60 * 24));
      //Set this value to a state so it can be used in the card as a variable.
      setDays(numberOfDays);
      // Calculate total price, that is, the number of days for the price per day of the item.
      const itemsTotalDaysPrice = numberOfDays * price
      setTotalDaysPrice(itemsTotalDaysPrice)
      // Calculate the fee, that is, 10% of the total price.
      //Set this fee in state so you can use it in the card.
      const itemFee = itemsTotalDaysPrice * 0.1
      setFee(itemFee)
      //Return the totalDaysPrice + the Fee.

      return itemsTotalDaysPrice + itemFee;
    }
    return 0;
  };

  //Function to handle the submit of the renting information to the API
  const handleSubmit = () => {
    const rentingInformation = {
      "item_id": item_id,
      "user_id": user_id,
      "starting_date": startDate,
      "ending_date": endDate,
      "status": "Pending",
      "total_value": totalPrice

    };

    axios.post("http://localhost:3000/reservations", rentingInformation)
    .then(response => console.log(response))

  };

  return (
    <>
    <div className="sticky border-2 rounded-xl shadow-xl top-0 p-7">
      <h5 className="mb-4"><strong>${price}</strong> Day</h5>
      <div className='border-2 rounded-xl text-center'>
        <div className='flex p-2'>
          <div className="border-r-2">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="start-date">
              Start Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              placeholderText="Click to select a date"
              className="block w-full bg-white rounded-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="start-date">
              End Date
            </label>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              placeholderText="Click to select a date"
              className="block w-full bg-white rounded-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className="text-white mt-4 mb-2 text-lg w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-500 dark:hover:bg-green-600">
        Rent Now
      </button>
      <p className='text-center text-xs mb-6'>Charged after Lessor confirms order.</p>
      <div className=' border-b-2'>
        <div className='flex justify-between'>
          <h5 className="font-bold underline mb-2">${price} x {days} Days</h5>
          <span>{totalDaysPrice}</span>
        </div>
        <div className='flex justify-between'>
          <h5 className="font-bold underline mb-4">Fee</h5>
          <span>{fee}$</span>
        </div>
      </div>
      <div className='flex justify-between mt-4'>
          <h5 className="font-bold">Total</h5>
          <span>{totalPrice}$</span>
        </div>
    </div>
    </>
  )
}

export default RentingCard
