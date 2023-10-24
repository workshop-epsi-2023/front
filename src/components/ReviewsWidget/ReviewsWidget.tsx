import { FunctionComponent } from 'react'
import { IRestaurant } from '../../mock/restaurants.mock'
interface ReviewsProps {
  restaurant: IRestaurant
}

const Reviews: FunctionComponent<ReviewsProps> = ({ restaurant }) => {
  return (
    <>
      <div className="w-4/6">
        <div className="px-6 py-12">
          <div className="lg:max-w-[456px] md:max-w-[616px] max-w-[475px] mx-auto bg-white px-4 py-10 relative">
            <div>
              <div>
                <p className="text-xl font-medium text-gray-800 mt-4">
                  <span className="text-xl font-bold text-gray-800">
                    {restaurant.name}
                  </span>
                </p>
                <p className="text-sm mt-4 text-gray-600">
                  You can select multiple!
                </p>
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  id="missing"
                  className="border text-sm border-gray-300 w-full py-2 rounded text-gray-600 focus:border-indigo-700 focus:text-indigo-700"
                >
                  Missing Items
                </button>
                <button
                  id="incorrect"
                  className="border text-sm border-gray-300 w-full py-2 rounded text-gray-600 focus:border focus:border-indigo-700 focus:text-indigo-700"
                >
                  Incorrect order
                </button>
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  id="packing"
                  className="border text-sm border-gray-300 w-full py-2 rounded text-gray-600 focus:border focus:border-indigo-700 focus:text-indigo-700"
                >
                  Packaging
                </button>
                <button
                  id="delivery"
                  className="border text-sm border-gray-300 w-full py-2 rounded text-gray-600 focus:border focus:border-indigo-700 focus:text-indigo-700"
                >
                  Delivery
                </button>
                <button
                  id="courier"
                  className="border text-sm border-gray-300 w-full py-2 rounded text-gray-600 focus:border-indigo-700 focus:text-indigo-700"
                >
                  Courier
                </button>
              </div>
              <div className="pt-10">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Tell us how we can improve
                </p>
                <textarea
                  className="resize-none border p-3 px-4 mt-3 focus:outline-none w-full"
                  rows={3}
                  placeholder="Write your message here"
                  defaultValue={''}
                />
              </div>
              <button
                id="rate"
                className="bg-indigo-700 text-sm text-white w-full text-center py-2 rounded font-medium mt-6 hover:bg-indigo-600 transition duration-300 ease-in-out"
              >
                Rate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
