import { FunctionComponent } from 'react'
import { IRestaurant } from '../../mock/restaurants.mock'
import { useNavigate } from 'react-router-dom'
import ReviewsQuestion from './ReviewsQuestion'
import { API_URL } from '../../config/env'
import { toast } from 'react-toastify'
interface ReviewsProps {
  restaurant: IRestaurant
}

export type CommentInput = {
  comment: string
  restaurantId: number
  userId: number
  note: number
}

const Reviews: FunctionComponent<ReviewsProps> = ({ restaurant }) => {
  const navigate = useNavigate()
  const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']

  const onSubmit = (e: any, restaurant: IRestaurant) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data: CommentInput = {
      comment: formData.get('commentaire') as string,
      restaurantId: restaurant.id,
      userId: 1,
      note: 1
    }
    console.log(data)
    fetch(API_URL + '/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (!response.status.toString().startsWith('2')) {
          throw new Error('Error')
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        navigate('/restaurant/addComment/finish')
      })
      .catch((error) => {
        toast.error("Une erreur est survenue, votre avis n'a pas été enregistré")
        console.error(error)
      })
    // navigate('/restaurant/addComment/finish')
  }

  return (
    <>
      <form onSubmit={(e) => onSubmit(e, restaurant)} className="w-4/6">
        <div className="px-6 py-12">
          <div className="lg:max-w-[456px] md:max-w-[616px] max-w-[475px] mx-auto bg-white px-4 py-10 relative">
            <div>
              <div>
                <div>
                  <img src={'https://source.unsplash.com/random/900×700/?restaurant,' + restaurant.category} alt="boy" className="mx-auto rounded-full h-16 w-16" />
                  <p className="text-base font-semibold l text-center text-gray-800 mt-4">{restaurant.libelle}</p>
                  <p className="text-xs  text-center text-gray-600 mt-4">{restaurant.address}</p>
                </div>
              </div>
              {questions.map((question, index) => (
                <ReviewsQuestion key={`${question}_${index}`} question={question} index={index} />
              ))}
              <div className="pt-10">
                <p className="text-sm font-medium leading-none text-gray-800">Ajoutez un commentaire</p>
                <textarea name="commentaire" id="commentaire" className="resize-none border p-3 px-4 mt-3 focus:outline-none w-full" rows={3} placeholder="Write your message here" defaultValue={''} />
              </div>
              <button type="submit" className="bg-indigo-700 text-sm text-white w-full text-center py-2 rounded font-medium mt-6 hover:bg-indigo-600 transition duration-300 ease-in-out">
                Envoyer mon Avis
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Reviews
