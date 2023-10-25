import { FunctionComponent, useEffect, useState } from 'react'
import { IRestaurant } from '../../mock/restaurants.mock'
import { CommentInput } from './ReviewsWidget'
import { API_URL } from '../../config/env'
import ReviewCard from '../ReviewCard/ReviewCard'

interface ReviewsListProps {
  restaurant: IRestaurant
}

const ReviewsList: FunctionComponent<ReviewsListProps> = ({ restaurant }) => {
  const [comments, setComments] = useState<CommentInput[]>([])

  useEffect(() => {
    fetch(API_URL + '/comments?restaurantId=' + restaurant.id)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setComments(data.results)
      })
  }, [])

  return (
    <div className="mt-20 flex justify-center items-center w-full px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center w-full">
        {comments.map((comment, index) => (
          <ReviewCard key={index} comment={comment} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default ReviewsList
