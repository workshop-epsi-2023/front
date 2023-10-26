import { FunctionComponent } from 'react'
import { IRestaurant } from '../../mock/restaurants.mock'
import { CommentInput } from '../ReviewsWidget/ReviewsWidget'

interface ReviewCardProps {
  comment: CommentInput
  restaurant: IRestaurant
}

const ReviewCard: FunctionComponent<ReviewCardProps> = ({ comment, restaurant }) => {
  const date = new Date(comment.date)

  return (
    <div className="w-full hover:shadow-lg shadow-none flex justify-center items-center flex-shrink-0  border rounded-md border-gray-200 h-full cursor-pointer">
      <div className="inline-flex flex-col space-y-1.5 items-start justify-end flex-1 h-full px-4 py-5">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row mb-4">
            <div>
              <img className="rounded-full h-10 w-10" src={'https://thispersondoesnotexist.com?page=' + comment.user.id} alt="avatar" />
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium leading-none text-gray-800">{comment.user.pseudo}</p>
              <p className="text-sm leading-none text-gray-400">Niveau: {comment.user.level}</p>
            </div>
          </div>
          {Math.round(comment.note) === 0 && (
            <div className="bg-black  py-1.5 px-6 rounded-full h-min">
              <p className="text-xs text-white">{comment.note}</p>
            </div>
          )}
          {Math.round(comment.note) === 1 && (
            <div className="bg-red-200 py-1.5 px-6 rounded-full h-min">
              <p className="text-xs text-red-500">{comment.note}</p>
            </div>
          )}
          {Math.round(comment.note) === 2 && (
            <div className="bg-orange-200 py-1.5 px-6 rounded-full h-min">
              <p className="text-xs text-orange-500">{comment.note}</p>
            </div>
          )}
          {Math.round(comment.note) === 3 && (
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full h-min">
              <p className="text-xs text-yellow-500">{comment.note}</p>
            </div>
          )}
          {Math.round(comment.note) === 4 && (
            <div className="bg-lime-200 py-1.5 px-6 rounded-full h-min">
              <p className="text-xs text-lime-500">{comment.note}</p>
            </div>
          )}
          {Math.round(comment.note) === 5 && (
            <div className="bg-green-200 py-1.5 px-6 rounded-full h-min">
              <p className="text-xs text-green-500">{comment.note}</p>
            </div>
          )}
        </div>
        <p className="text-sm font-medium leading-none text-gray-800">{restaurant.libelle}</p>
        <p className="text-sm leading-tight text-gray-600">{comment.comment}</p>
        <p className="text-sm leading-tight text-gray-400">Publié le {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}h`}</p>
      </div>
    </div>
  )
}

export default ReviewCard
