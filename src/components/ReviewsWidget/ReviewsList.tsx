import { FunctionComponent } from 'react'
import { IRestaurant } from '../../mock/restaurants.mock'
import ReviewCard from '../ReviewCard/ReviewCard'

interface ReviewsListProps {
  restaurant: IRestaurant
}

const ReviewsList: FunctionComponent<ReviewsListProps> = ({ restaurant }) => {
  return (
    <div className="mt-20 flex justify-center items-center w-full px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center w-full">
        {restaurant.comments.results
          .filter((comment) => comment.user != null)
          .map((comment, index) => (
            <ReviewCard key={index} comment={comment} restaurant={restaurant} />
          ))}
      </div>
    </div>
  )
}

export default ReviewsList
