import { FunctionComponent, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { API_URL } from '../../config/env'
import WithAuthentication from '../../hoc/withAuthentication'
import { IRestaurant } from '../../mock/restaurants.mock'
import Loader from '../Loader/Loader'
import RestaurantWidget from '../RestaurantWidget/RestaurantWidget'
import ReviewsList from '../ReviewsWidget/ReviewsList'
interface RestaurantDetailProps {}

const RestaurantDetail: FunctionComponent<RestaurantDetailProps> = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { restaurantId } = useParams()

  useEffect(() => {
    fetch(API_URL + '/restaurants/' + restaurantId)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRestaurant(data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="overflow-y-scroll h-screen -mt-16">
      <div className="mt-16">
        {restaurant && (
          <>
            <RestaurantWidget restaurant={restaurant} />
            <Link className="m-4 p-2 bg-purple-500 text-white rounded" to={`/restaurant/${restaurant.id}/addComment`}>
              Notez moi
            </Link>

            <ReviewsList restaurant={restaurant} />
          </>
        )}
        {isLoading && <Loader />}
        {!isLoading && !restaurant && <Navigate to={'/'} />}
      </div>
    </div>
  )
}

export default WithAuthentication(RestaurantDetail)
