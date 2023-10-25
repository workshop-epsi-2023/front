import { FunctionComponent, useEffect, useState } from 'react'
import Reviews from '../ReviewsWidget/ReviewsWidget'
import { useParams } from 'react-router-dom'
import { IRestaurant } from '../../mock/restaurants.mock'
import { API_URL } from '../../config/env'

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
        console.log(data)
        setRestaurant(data)
      })
  }, [])

  return <div className=" w-full h-screen grid place-items-center bg-gray-100">{restaurant && <Reviews restaurant={restaurant} />}</div>
}

export default Widget
