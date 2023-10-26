import { FunctionComponent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { API_URL } from '../../config/env'
import { IUser, useAuthContext } from '../../context/Auth/AuthProvider'
import { IRestaurant } from '../../mock/restaurants.mock'
import ReviewsQuestion, { Response } from './ReviewsQuestion'
interface ReviewsProps {
  restaurant: IRestaurant
}

export type CommentInput = {
  comment: string
  restaurantId: number
  userId: number
  note: number
  user: IUser
  date: string
}

const Reviews: FunctionComponent<ReviewsProps> = ({ restaurant }) => {
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const [length, setLength] = useState(0)
  const questions = [
    'Le restaurant propose-t-il des options de recyclage pour les déchets?',
    'Les emballages utilisés sont-ils écologiques et recyclables?',
    'Le restaurant composte-t-il ses déchets organiques?',
    'Le restaurant privilégie-t-il les produits locaux et de saison?',
    'Propose-t-il des plats végétariens ou végétaliens?',
    'Le restaurant source-t-il des ingrédients durables et certifiés?',
    'Le restaurant utilise-t-il des appareils économes en énergie?',
    "A-t-il mis en place des mesures pour réduire la consommation d'eau?",
    'Le chauffage et la climatisation sont-ils écoénergétiques?',
    'Le restaurant est-il situé à proximité de transports en commun?',
    'Propose-t-il des solutions de mobilité durable pour les clients?',
    "Encourage-t-il le covoiturage ou l'utilisation de vélos?",
    'Le restaurant encourage-t-il les clients à apporter leurs propres contenants réutilisables?',
    'Utilise-t-il des emballages à usage unique écologiques?',
    'Offre-t-il des pailles en papier ou des couverts en bois?',
    'Le restaurant a-t-il mis en place des mesures pour réduire son empreinte carbone?',
    'Participe-t-il à des initiatives de sensibilisation environnementale?',
    'Respecte-t-il des normes environnementales spécifiques ou détient-il des certifications?',
    'Dispose-t-il de bacs de recyclage et de compostage pour les clients?',
    'Propose-t-il des menus ou des options sans gaspillage alimentaire?',
    "Utilise-t-il des produits d'entretien respectueux de l'environnement?",
    "S'engage-t-il à limiter l'utilisation de pesticides et d'herbicides?",
    "A-t-il mis en place des systèmes d'économie d'eau, tels que des robinets à faible débit?",
    "Encourage-t-il les clients à demander de l'eau ou des serviettes uniquement lorsque c'est nécessaire?",
    'Le restaurant communique-t-il ses pratiques écologiques aux clients?',
    "Dispose-t-il d'un site Web ou de supports marketing décrivant son engagement envers l'environnement?"
  ]

  const onChange = (e: any) => {
    e.preventDefault()
    setLength(e.target.files.length)
  }

  const getRandomQuestions = (questions: string[], count: number) => {
    if (count >= questions.length) {
      return questions // Si vous demandez plus de questions que disponibles, retournez toutes les questions.
    }

    const shuffledQuestions = questions.slice() // Copie de la liste pour éviter de modifier l'original.
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]]
    }

    return shuffledQuestions.slice(0, count)
  }

  const onSubmit = (e: any, restaurant: IRestaurant) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let note = 5
    if (formData.get('0') === Response.NO) {
      note -= 1
    }
    if (formData.get('1') === Response.NO) {
      note -= 1
    }
    if (formData.get('2') === Response.NO) {
      note -= 1
    }
    if (formData.get('3') === Response.NO) {
      note -= 1
    }
    if (formData.get('4') === Response.NO) {
      note -= 1
    }
    if (formData.get('0') === Response.YES) {
      note += 1
    }
    if (formData.get('1') === Response.YES) {
      note += 1
    }
    if (formData.get('2') === Response.YES) {
      note += 1
    }
    if (formData.get('3') === Response.YES) {
      note += 1
    }
    if (formData.get('4') === Response.YES) {
      note += 1
    }
    if (user != null) {
      const data: CommentInput = {
        comment: formData.get('commentaire') as string,
        restaurantId: restaurant.id,
        userId: user.id,
        note: note / 2,
        user,
        date: new Date().toISOString()
      }
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
          navigate(`/restaurant/${restaurant.id}/addComment/finish`)
        })
        .catch((error) => {
          toast.error("Une erreur est survenue, votre avis n'a pas été enregistré")
        })
    }
  }

  return (
    <form onSubmit={(e) => onSubmit(e, restaurant)} className="max-w-sm ">
      <div className="bg-white px-4 py-10 relative">
        <div>
          <div>
            <img src={'https://source.unsplash.com/random/900×700/?restaurant,' + restaurant.category} alt="boy" className="mx-auto rounded-full h-16 w-16" />
            <p className="text-base font-semibold l text-center text-gray-800 mt-4">{restaurant.libelle}</p>
            <p className="text-xs  text-center text-gray-600 mt-4">{restaurant.address}</p>
          </div>
        </div>
        {getRandomQuestions(questions, 5).map((question, index) => (
          <ReviewsQuestion key={`${question}_${index}`} question={question} index={index} />
        ))}
        <div className="pt-10">
          <p className="text-sm font-medium leading-none text-gray-800">Ajoutez un commentaire</p>
          <textarea name="commentaire" id="commentaire" className="resize-none border p-3 px-4 mt-3 focus:outline-none w-full" rows={3} placeholder="Write your message here" defaultValue={''} />
        </div>
        <div className="pt-10">
          <p className="text-sm font-medium leading-none text-gray-800 mb-5">Ajoutez une image</p>
          <div className="flex flex-row gap-5">
            <label htmlFor="image" className="bg-indigo-700 text-white rounded-full px-5 py-2">
              Parcourir
            </label>
            <p>{length} fichier(s)</p>
          </div>
          <input onChange={onChange} id="image" accept="image/png, image/jpeg" type="file" multiple={true} className="opacity-0 h-0" />
        </div>
        <button type="submit" className="bg-indigo-700 text-sm text-white w-full text-center py-2 rounded font-medium mt-6 hover:bg-indigo-600 transition duration-300 ease-in-out">
          Envoyer mon Avis
        </button>
      </div>
    </form>
  )
}

export default Reviews
