import { FunctionComponent } from 'react'
import WithAuthentication from '../../hoc/withAuthentication'
interface RestaurantDetailProps {}

const RestaurantDetail: FunctionComponent<RestaurantDetailProps> = () => {
  return <>salut</>
}

export default WithAuthentication(RestaurantDetail)
