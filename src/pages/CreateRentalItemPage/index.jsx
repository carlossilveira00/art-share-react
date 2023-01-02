import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CreateRentalItemPage = ({ user }) => {
  // Set Item information that will be send to the DB through a POST request to create an Item.
  const [itemInformation, setItemInformation] = useState({user_id: user.user_information.id});
  // Handle the change of of each field in the form to then set the state of the itemInformation.
  const handleChange = () => {

  };
  // Handle the submit will be the function that will be called when the user submits the form.
  // This function will take care of taking the itemInformation state and sending it to the API through an POST request.
  const handleSubmit = () => {

  };

  return (
    <>
      <Navbar user={user}/>
      <div className='container mx-auto pt-16'>
      <form action="" className="container mx-auto w-4/6 my-10 shadow-2xl">
        <div className="flex flex-col space-y-5">
          <label className='text-center mt-5'>
            <p className="font-medium text-slate-700 pb-2">Item Name:</p>
            <input id="name" name="name" type="text" className="w-1/2 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter item name..."/>
          </label>
          <label className='text-center'>
            <p className="font-medium text-slate-700 pb-2">Description:</p>
            <textarea name="description" id="description" cols="10" rows="5" placeholder='Write a small description about the item.' className="w-1/2 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"></textarea>
          </label>
          <label className='text-center'>
            <p className="font-medium mr-5 text-slate-700 pb-2">Category:</p>
            <select name="category" id="category" className="w-1/4 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow">
              <option value="paintings">Paintings</option>
              <option value="sculptures">Sculptures</option>
              <option value="photography">Photography</option>
              <option value="prints">Prints</option>
              <option value="ceramic">Ceramics</option>
              <option value="furniture">Furniture</option>
            </select>
          </label>
          <label className='text-center'>
            <p className="font-medium text-slate-700 pb-2">Location:</p>
            <input id="location" name="location" type="text" className="w-1/3 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter item's location"/>
          </label>
          <label className='text-center'>
            <p className="font-medium mr-5 text-slate-700 pb-2">Current Situation:</p>
            <select name="current_situation" id="current_situation" className="w-1/4 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow">
              <option value="Available">Available</option>
              <option value="On Display">On Display</option>
            </select>
          </label>
          <label className='text-center'>
            <p className="font-medium mr-5 text-slate-700 pb-2">Price:</p>
            <input id="price" name="price" type="number" className="w-1/6 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"/>
          </label>
          <label className='text-center'>
            <p className="font-medium text-slate-700 pb-2">Image Url:</p>
            <input id="image_url" name="image_url" type="text" className="w-1/2 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter image url.."/>
          </label>
          <div className='text-center'>
            <button className="w-1/3 mb-5 py-3 font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Create Item</span>
            </button>
          </div>
        </div>
      </form>
      </div>
      <Footer/>
    </>
  )
};

export default CreateRentalItemPage;
