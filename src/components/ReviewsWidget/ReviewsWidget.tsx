import { FunctionComponent, useState } from 'react'
import { IRestaurant } from '../../mock/restaurants.mock'
import { Link, useNavigate } from 'react-router-dom'
import ReviewsQuestion from './ReviewsQuestion'
interface ReviewsProps {
  restaurant: IRestaurant
}

const Reviews: FunctionComponent<ReviewsProps> = ({ restaurant }) => {
  const navigate = useNavigate()
  const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5']

  const onSubmit = (e: any) => {
    e.preventDefault()
    const data = new FormData(e.target)
    for (const [name, value] of data) {
      console.log(name, ':', value)
    }
    navigate('/restaurant/addComment/finish')
  }

  return (
    <>
      <form onSubmit={onSubmit} className="w-4/6">
        <div className="px-6 py-12">
          <div className="lg:max-w-[456px] md:max-w-[616px] max-w-[475px] mx-auto bg-white px-4 py-10 relative">
            <div>
              <div>
                <div>
                  <img src={'https://picsum.photos/20' + restaurant.id} alt="boy" className="mx-auto rounded-full h-16 w-16" />
                  <p className="text-base font-semibold l text-center text-gray-800 mt-4">{restaurant.libelle}</p>
                  <p className="text-xs  text-center text-gray-600 mt-4">{restaurant.address}</p>
                </div>
              </div>
              {questions.map((question, index) => (
                <ReviewsQuestion key={`${question}_${index}`} question={question} />
              ))}
              <div className="pt-10">
                <p className="text-sm font-medium leading-none text-gray-800">Ajoutez un commentaire</p>
                <textarea className="resize-none border p-3 px-4 mt-3 focus:outline-none w-full" rows={3} placeholder="Write your message here" defaultValue={''} />
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
