import { FunctionComponent } from 'react'
import WithAuthentication from '../../hoc/withAuthentication'
import Map from '../Map/Map'
import { RESTAURANT_MOCK } from '../../mock/restaurants.mock'
import RestaurantList from '../RestaurantList/RestaurantList'

interface HomePageProps {
  searchValue: string
}

const HomePage: FunctionComponent<HomePageProps> = ({ searchValue }) => {
  const restaurants = RESTAURANT_MOCK.filter((restaurant) => {
    const url = new URL(window.location.href)
    return restaurant.name.toLowerCase().includes(searchValue)
  })

  return (
    <section className="grid gap-5">
      <Map restaurants={restaurants} />
      <RestaurantList restaurants={restaurants} />
    </section>
  )
}

export default WithAuthentication(HomePage)
