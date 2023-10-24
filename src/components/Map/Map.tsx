import { FunctionComponent, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MAPBOX_TOKEN } from '../../config/env'
import { IRestaurant } from '../../mock/restaurants.mock'

interface MapProps {
  restaurants: IRestaurant[]
}

const Map: FunctionComponent<MapProps> = ({ restaurants }) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null)

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: 'map',
        accessToken: MAPBOX_TOKEN,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [2.3522219, 48.856614],
        zoom: 12
      })
    )
  }, [])

  useEffect(() => {
    if (map) {
      map.on('load', () => {
        map.addSource('restaurants', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: restaurants.map((restaurant) => ({
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [restaurant.location.lng, restaurant.location.lat]
              },
              properties: {
                id: restaurant.id,
                name: restaurant.name,
                address: restaurant.address
              }
            }))
          }
        })
        map.addLayer({
          id: 'restaurants',
          type: 'circle',
          source: 'restaurants',
          paint: {
            'circle-radius': 4,
            'circle-color': '#CB2727'
          }
        })
      })
    }
  }, [map])

  return <div id="map" className="w-full h-64 rounded-2xl -z-10"></div>
}

export default Map
