import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { IRestaurant } from '../../mock/restaurants.mock'

interface RestaurantWidgetProps {
  restaurant: IRestaurant
}

const RestaurantWidget: FunctionComponent<RestaurantWidgetProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="shadow-md">
      <div>
        <img src={'https://source.unsplash.com/random/900×700/?restaurant,' + restaurant.category} className="w-full h-44 object-cover" />
      </div>
      <div className="bg-white">
        <div className="flex items-center justify-between px-4 pt-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
            </svg>
          </div>
          {Math.round(restaurant.rating) === 0 && (
            <div className="bg-black  py-1.5 px-6 rounded-full">
              <p className="text-xs text-white">{restaurant.rating}</p>
            </div>
          )}
          {Math.round(restaurant.rating) === 1 && (
            <div className="bg-red-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-red-500">{restaurant.rating}</p>
            </div>
          )}
          {Math.round(restaurant.rating) === 2 && (
            <div className="bg-orange-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-orange-500">{restaurant.rating}</p>
            </div>
          )}
          {Math.round(restaurant.rating) === 3 && (
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-yellow-500">{restaurant.rating}</p>
            </div>
          )}
          {Math.round(restaurant.rating) === 4 && (
            <div className="bg-lime-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-lime-500">{restaurant.rating}</p>
            </div>
          )}
          {Math.round(restaurant.rating) === 5 && (
            <div className="bg-green-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-green-500">{restaurant.rating}</p>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold">{restaurant.libelle}</h2>
          </div>
          <p className="text-xs text-gray-600 mt-2">{restaurant.address}</p>
          <div className="flex mt-4">
            <div>
              <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">{restaurant.category}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RestaurantWidget
