import React from 'react'

const Faq = () => {
  return (
<div>
  <section className="text-gray-700 bg-neutral-100">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
          Frequently Asked Question
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          The most common questions about how our business works and what we
          can do for you.
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="w-full lg:w-1/2 px-4 py-2">
          <details className="mb-4">
            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
            What types of art pieces are available for rent on art-share?
            </summary>
            <span>
              Our platform offers a wide variety of art pieces, including paintings,
            sculptures, photographs, and prints. We strive to offer a diverse selection
            of styles and mediums to suit a variety of tastes and preferences.
            </span>
          </details>
          <details className="mb-4">
            <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
            Can I rent art for a specific event or occasion?
            </summary>
            <span>
              Yes, you can rent art for a specific event or occasion through art-share.
            Simply select the rental period that best fits your needs, and we'll make
            sure the art is delivered to your location in time for your event.
            </span>
          </details>
          <details className="mb-4">
            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
            How do I know that the art piece I'm interested in is available for rent?
            </summary>

            <span>
              All of the art pieces available for rent on our platform are clearly marked as such,
            and the availability is listed on each piece's page. If a piece is currently unavailable,
            you can sign up to be notified when it becomes available again.
            </span>
          </details>
        </div>
        <div className="w-full lg:w-1/2 px-4 py-2">
          <details className="mb-4">
            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
              Can I return an art piece early if I no longer need it?
            </summary>
            <span className="px-4 py-2">
            Yes, you can return an art piece early if you no longer need it.
            Simply contact us to arrange for the return of the piece, and we'll make sure
            it's collected from your location. Please note that rental fees are non-refundable.
            </span>
          </details>
          <details className="mb-4">
            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
              Can I put my own art pieces up for rent on art-share?
            </summary>
            <span className="px-4 py-2">
            Yes, you can put your own art pieces up for rent on our platform. Simply sign up as a seller and follow the prompts to list your art for rent.
            </span>
          </details>
          <details className="mb-4">
            <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
            Is there a limit to the number of art pieces I can rent at one time?
            </summary>
            <span className="px-4 py-2">
              There is no limit to the number of art pieces you can rent at one time, although availability may vary depending on the specific pieces you're interested in.
            If you have any questions about the availability of a particular piece, don't hesitate to contact us.
            </span>
          </details>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Faq
