import { FunctionComponent, useEffect, useState } from 'react'
import { API_URL } from '../../config/env'
import { useSearchContext } from '../../context/Search/SearchProvider'
import WithAuthentication from '../../hoc/withAuthentication'
import { IRestaurant } from '../../mock/restaurants.mock'
import Map from '../Map/Map'
import RestaurantList from '../RestaurantList/RestaurantList'

interface HomePageProps {
  searchValue: string
}

const HomePage: FunctionComponent<HomePageProps> = ({ searchValue }) => {
  const { activateSearch, disactivateSearch } = useSearchContext()
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([])

  useEffect(() => {
    activateSearch()
    return () => {
      disactivateSearch()
    }
  }, [])

  useEffect(() => {
    const url = API_URL + '/restaurants?limit=100&search=' + searchValue
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRestaurants(data.results)
      })
  }, [searchValue])

  return (
    <div className="w-full overflow-y-scroll h-screen -mt-16">
      <>
        <div className="bg-gray-50 w-full p-2 mt-16">
          <div className="flex flex-col items-start justify-between px-4 lg:items-center lg:px-6 md:px-4 lg:flex-row md:flex-row md:items-center">
            <div className="flex flex-col">
              <p className="text-2xl font-semibold leading-normal text-gray-800">Dashboard</p>
              <div className="flex mt-3 gap-x-2">
                <p className="text-xs leading-3 text-indigo-700 cursor-pointer">Dashboard</p>
                <svg className="cursor-pointer" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.10332 3.06284L8.04082 7.00034L4.10332 10.9378L5.03139 11.8659L9.89697 7.00034L5.03139 2.13477L4.10332 3.06284Z" fill="#4338CA" />
                </svg>
                <p className="text-xs leading-3 text-indigo-700 cursor-pointer">Restaurants</p>
              </div>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex flex-col px-4 lg:px-6 md:px-4 gap-x-5 lg:flex-row md:flex-row gap-y-4">
            <div className="flex gap-x-1">
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.375 5.0625H16.3125V9" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M1.6875 12.9375L5.95441 8.67059C6.05888 8.56609 6.18291 8.4832 6.31942 8.42665C6.45593 8.3701 6.60224 8.34099 6.75 8.34099C6.89776 8.34099 7.04407 8.3701 7.18058 8.42665C7.31709 8.4832 7.44112 8.56609 7.54559 8.67059L9.32941 10.4544C9.43388 10.5589 9.55791 10.6418 9.69442 10.6984C9.83093 10.7549 9.97724 10.784 10.125 10.784C10.2728 10.784 10.4191 10.7549 10.5556 10.6984C10.6921 10.6418 10.8161 10.5589 10.9206 10.4544L15.75 5.625"
                  stroke="#4B5563"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm leading-none text-gray-600 mt-[1px]">{restaurants.length} Résultats</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          {/* Place your content here */}
          <section className="grid gap-5">
            <Map restaurants={restaurants} />
            <RestaurantList restaurants={restaurants} />
          </section>
        </div>
      </>
    </div>
  )
}

export default WithAuthentication(HomePage)
