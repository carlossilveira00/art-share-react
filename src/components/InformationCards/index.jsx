import React from 'react'

const InformationCards = () => {
  return (
  <div class="flex flex-wrap my-6">
    <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
      <div class="relative flex flex-col min-w-0 break-words bg-emerald-50 w-full mb-8 shadow-lg rounded-lg h-96">
        <div class="px-4 py-5 flex-auto">
          <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
            <i class="fas fa-award"></i>
          </div>
          <h6 class="text-xl font-semibold">Convenience</h6>
          <p class="mt-2 mb-4 text-blueGray-500">
          You can easily browse and rent art pieces from the comfort of your own home, without the need to physically visit galleries or stores.
          This can save you time and effort, especially if you're looking for specific pieces or want to see a variety of options.
          </p>
        </div>
      </div>
    </div>
    <div class="w-full md:w-4/12 px-4 text-center">
      <div class="relative flex flex-col min-w-0 break-words bg-teal-50 w-full mb-8 shadow-lg rounded-lg">
        <div class="px-4 py-5 flex-auto">
          <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
            <i class="fas fa-retweet"></i>
          </div>
          <h6 class="text-xl font-semibold">Affordability</h6>
          <p class="mt-2 mb-4 text-blueGray-500">
          Renting art through can be more affordable than purchasing pieces outright, especially if you're only interested in a short-term rental or are on a budget.
          This can allow you to bring a touch of beauty and culture to your home or event without breaking the bank.
          </p>
        </div>
      </div>
    </div>
    <div class="pt-6 w-full md:w-4/12 px-4 text-center">
      <div class="relative flex flex-col min-w-0 break-words bg-emerald-50 w-full mb-8 shadow-lg rounded-lg">
        <div class="px-4 py-5 flex-auto">
          <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
            <i class="fas fa-fingerprint"></i>
          </div>
          <h6 class="text-xl font-semibold">Flexibility</h6>
          <p class="mt-2 mb-4 text-blueGray-500">
          Art-share allows you to switch up the art in your home or event regularly, giving you the opportunity to try out different styles and pieces without committing
          to a permanent purchase. This can be especially useful if you like to switch up your decor often or are hosting events with different themes.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
;
export default InformationCards;
