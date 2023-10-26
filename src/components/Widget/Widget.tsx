import { FunctionComponent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../config/env'
import { IRestaurant } from '../../mock/restaurants.mock'
import Reviews from '../ReviewsWidget/ReviewsWidget'

interface WidgetProps {}

const Widget: FunctionComponent<WidgetProps> = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null)
  const { restaurantId } = useParams()

  useEffect(() => {
    fetch(API_URL + '/restaurants/' + restaurantId)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRestaurant(data)
      })
  }, [])

  return <div className=" w-screen grid place-items-center bg-gray-100">{restaurant && <Reviews restaurant={restaurant} />}</div>
}

export default Widget
