import { FunctionComponent, useState } from 'react'

interface ReviewsQuestionProps {
  question: string
}

enum Response {
  YES = 'Oui',
  NO = 'Non',
  DONT_KNOW = 'Je ne sais pas'
}

const ReviewsQuestion: FunctionComponent<ReviewsQuestionProps> = ({ question }) => {
  const [state, setState] = useState<Response>()

  return (
    <section>
      <div>
        <p className="text-sm mt-4 text-gray-600">{question}</p>
      </div>
      <div className="mt-4 flex gap-4">
        <input type="text" value={state} className="hidden" name={question} />
        {Object.values(Response).map((response, index) => (
          <button
            key={response}
            onClick={(e) => {
              e.preventDefault()
              setState(response)
            }}
            id={response}
            className={'border text-sm w-full py-2 rounded ' + (response === state ? 'text-indigo-700 border-indigo-700' : 'text-gray-600 border-gray-300')}
          >
            {response}
          </button>
        ))}
      </div>
    </section>
  )
}

export default ReviewsQuestion
