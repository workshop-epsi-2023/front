import { FunctionComponent } from 'react'
import { IRestaurant } from '../../mock/restaurants.mock'
import RestaurantWidget from '../RestaurantWidget/RestaurantWidget'

interface RestaurantListProps {
  restaurants: IRestaurant[]
}

const RestaurantList: FunctionComponent<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div className="mx-auto container">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {restaurants.map((restaurant, index) => (
          <RestaurantWidget restaurant={restaurant} key={`${restaurant.libelle}_${index}`} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantList
