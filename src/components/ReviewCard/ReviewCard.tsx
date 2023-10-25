import { FunctionComponent } from 'react'
import { CommentInput } from '../ReviewsWidget/ReviewsWidget'
import { IRestaurant } from '../../mock/restaurants.mock'

interface ReviewCardProps {
  comment: CommentInput
  restaurant: IRestaurant
}

const ReviewCard: FunctionComponent<ReviewCardProps> = ({ comment, restaurant }) => {
  return (
    <div className="w-full hover:shadow-lg shadow-none flex justify-center items-center flex-shrink-0  border rounded-md border-gray-200 h-full cursor-pointer">
      <div className="inline-flex flex-col space-y-1.5 items-start justify-end flex-1 h-full px-4 py-5">
        <div className="flex flex-row mb-4">
          <div>
            <img className="rounded-full h-10 w-10" src="https://thispersondoesnotexist.com/" alt="avatar" />
          </div>
          <div className="ml-2">
            <p className="text-sm font-medium leading-none text-gray-800">Jane Doe</p>
          </div>
        </div>
        <p className="text-sm font-medium leading-none text-gray-800">{restaurant.libelle}</p>
        <p className="text-sm leading-tight text-gray-600">{comment.comment}</p>
      </div>
    </div>
  )
}

export default ReviewCard
