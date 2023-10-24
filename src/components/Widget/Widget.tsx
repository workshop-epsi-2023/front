import { FunctionComponent } from 'react'
import Reviews from '../ReviewsWidget/ReviewsWidget'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { RESTAURANT_MOCK } from '../../mock/restaurants.mock'

interface WidgetProps {}

const Widget: FunctionComponent<WidgetProps> = () => {
  const { restaurantId } = useParams()
  const navigate = useNavigate()

  console.log(restaurantId)
  if (!restaurantId) {
    navigate('/')
  }

  const restaurant = RESTAURANT_MOCK.find(
    (restaurant) => restaurant.id.toString() === restaurantId
  )

  return (
    <div className=" w-full h-screen grid place-items-center bg-gray-100">
      {!restaurant && <Navigate to={'/'} />}
      {restaurant && <Reviews restaurant={restaurant} />}
    </div>
  )
}

export default Widget
