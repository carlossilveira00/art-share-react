import axios from 'axios';
import React from 'react'


const UserCard = ({ user, items, renting, completed}) => {
  console.log(user)
  const handleAvatar = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData()
    formData.append('event[photo]', form.photo.files[0], form.photo.value)

    axios.post('http://localhost:3000/update_avatar/3', formData)
    .then(response => window.location.reload())
  };

  return (
    <div class=" w-1/4 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div class="px-6">
              <div class="flex flex-wrap justify-center">
                  <div class="w-full flex justify-center">
                      <div class="relative">
                          <img src={user.user_information.user_avatar} className="shadow-xl rounded-full align-middle border-none absolute -m-16  max-w-[150px] max-h-[150px]"/>
                      </div>
                  </div>
                  <div class="w-full text-center mt-20">
                      <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                          <div class="p-3 text-center">
                              <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{items}</span>
                              <span class="text-sm text-slate-400">My Items</span>
                          </div>
                          <div class="p-3 text-center">
                              <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{completed}</span>
                              <span class="text-sm text-slate-400">Completed Renting</span>
                          </div>

                          <div class="p-3 text-center">
                              <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">{renting}</span>
                              <span class="text-sm text-slate-400">Currently Renting</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="text-center mt-2">
                  <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">{user.user_information.user.first_name} {user.user_information.user.last_name}</h3>
                  <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                      <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{user.user_information.user.location}
                  </div>
              </div>
              <div class="mt-6 py-6 border-t border-slate-200 text-center">
                  <div class="flex flex-wrap justify-center">
                      <div class="w-full px-4">
                          <p class="font-light leading-relaxed text-slate-600 mb-4">{user.user_information.user.information}</p>
                      </div>
                  </div>
              </div>
              <div>
                <form onSubmit={handleAvatar}>
                <label class="w-full underline text-center block ml-3 mb-0" for="poster">
                  Update Profile Picture
                </label>
                  <fieldset className="my-2">
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      className="w-full block p-2"
                    />
                  </fieldset>
                  <button
                    class=" ml-24 block p-3 mb-4 bg-green-400 rounded-lg hover:bg-green-500 text-center transition duration-200"
                    type="submit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </button>
                </form>
              </div>
          </div>
        </div>
  )
}

export default UserCard;
