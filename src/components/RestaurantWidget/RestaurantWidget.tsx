import { FunctionComponent } from 'react'
import { IRestaurant } from '../../mock/restaurants.mock'
import { Link } from 'react-router-dom'

interface RestaurantWidgetProps {
  restaurant: IRestaurant
}

const RestaurantWidget: FunctionComponent<RestaurantWidgetProps> = ({
  restaurant
}) => {
  return (
    <div className="w-72 lg:mb-0 mb-8">
      <div>
        <img
          src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
          className="w-full h-44"
        />
      </div>
      <div className="bg-white">
        <div className="flex items-center justify-between px-4 pt-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bookmark"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
          </div>
          <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
            <p className="text-xs text-yellow-500">{restaurant.rating}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold">{restaurant.name}</h2>
          </div>
          <p className="text-xs text-gray-600 mt-2">{restaurant.address}</p>
          <div className="flex mt-4">
            <div>
              <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                {restaurant.categories}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <Link
              to={`/restaurant/${restaurant.id}`}
              className="focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-indigo-500 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
            >
              Consulter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantWidget
