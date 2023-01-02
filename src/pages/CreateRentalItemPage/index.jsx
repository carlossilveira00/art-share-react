import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CreateRentalItemPage = ({ user }) => {
  return (
    <>
      <Navbar user={user}/>
      <div>
      <form action="" className="container mx-auto w-4/6 my-10">
        <div className="flex flex-col space-y-5">
          <label>
            <p className="font-medium text-slate-700 pb-2">Item Name:</p>
            <input id="name" name="name" type="text" className="w-1/2 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter item name..."/>
          </label>
          <label>
            <p className="font-medium text-slate-700 pb-2">Description:</p>
            <textarea name="description" id="description" cols="10" rows="5" placeholder='Write a small description about the item.' className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"></textarea>
          </label>
          <label className='flex items-center'>
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
          <label>
            <p className="font-medium text-slate-700 pb-2">Location:</p>
            <input id="location" name="location" type="text" className="w-1/3 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter item's location"/>
          </label>
          <label className='flex items-center'>
            <p className="font-medium mr-5 text-slate-700 pb-2">Current Situation:</p>
            <select name="current_situation" id="current_situation" className="w-1/4 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow">
              <option value="Available">Available</option>
              <option value="On Display">On Display</option>
            </select>
          </label>
          <label className='flex items-center'>
            <p className="font-medium mr-5 text-slate-700 pb-2">Price:</p>
            <input id="price" name="price" type="number" className="w-1/6 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"/>
          </label>
          <label>
            <p className="font-medium text-slate-700 pb-2">Image Url:</p>
            <input id="image_url" name="image_url" type="text" className="w-1/2 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter image url.."/>
          </label>
          <div className="flex flex-row justify-between">
            <div>
              <label>
                <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-green-500 "/>
                  Remember me?
              </label>
            </div>
            <div>
              <a href="#" className="font-medium text-green-500">Forgot Password?</a>
            </div>
          </div>
          <button className="w-full py-3 font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Login</span>
          </button>
          <p className="text-center">Not registered yet? <a href="#" className="text-green-500 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></span></a>
          </p>
        </div>
      </form>
      </div>
      <Footer/>
    </>
  )
};

export default CreateRentalItemPage;
