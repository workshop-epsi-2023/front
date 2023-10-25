import { FunctionComponent, useEffect, useState } from 'react'
import WithAuthentication from '../../hoc/withAuthentication'
import RestaurantWidget from '../RestaurantWidget/RestaurantWidget'
import { IRestaurant } from '../../mock/restaurants.mock'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../config/env'
import ReviewsList from '../ReviewsWidget/ReviewsList'
interface RestaurantDetailProps {}

const RestaurantDetail: FunctionComponent<RestaurantDetailProps> = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null)
  const { restaurantId } = useParams()

  useEffect(() => {
    fetch(API_URL + '/restaurants/' + restaurantId)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setRestaurant(data)
      })
  }, [])

  return (
    <>
      {restaurant && (
        <>
          <RestaurantWidget restaurant={restaurant} />
          <Link className="m-4 p-2 bg-purple-500 text-white rounded" to={`/restaurant/${restaurant.id}/addComment`}>
            Notez moi
          </Link>

          <ReviewsList restaurant={restaurant} />
        </>
      )}
      {!restaurant && <p>Restaurant not found</p>}
    </>
  )
}

export default WithAuthentication(RestaurantDetail)
