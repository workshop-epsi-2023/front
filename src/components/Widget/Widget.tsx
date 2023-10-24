import { FunctionComponent } from 'react'
import Reviews from '../Reviews/Reviews'

interface WidgetProps {}

const Widget: FunctionComponent<WidgetProps> = () => {
  return (
    <div className=" w-full h-screen grid place-items-center bg-gray-100">
      <Reviews />
    </div>
  )
}

export default Widget
