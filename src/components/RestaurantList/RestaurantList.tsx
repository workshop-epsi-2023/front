import { FunctionComponent } from 'react'
import { IRestaurant } from '../../mock/restaurants.mock'
import RestaurantWidget from '../RestaurantWidget/RestaurantWidget'

interface RestaurantListProps {
  restaurants: IRestaurant[]
}

const RestaurantList: FunctionComponent<RestaurantListProps> = ({
  restaurants
}) => {
  return (
    <div className="mx-auto container">
      <div className="flex flex-wrap items-center lg:justify-between justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantWidget restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantList
