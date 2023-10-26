import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { FunctionComponent, useEffect, useState } from 'react'
import { MAPBOX_TOKEN } from '../../config/env'
import { IRestaurant } from '../../mock/restaurants.mock'

interface MapProps {
  restaurants: IRestaurant[]
}

const Map: FunctionComponent<MapProps> = ({ restaurants }) => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null)
  const [mapIsLoaded, setMapIsLoaded] = useState(false)

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: 'map',
        accessToken: MAPBOX_TOKEN,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [2.3522219, 48.856614],
        zoom: 10
      })
    )
  }, [])

  useEffect(() => {
    if (map) {
      map.on('load', () => {
        setMapIsLoaded(true)
      })
    }
  }, [map])

  useEffect(() => {
    if (mapIsLoaded && map) {
      map.addSource('restaurants', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: restaurants.map((restaurant) => {
            return {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [restaurant.longitude, restaurant.latitude]
              },
              properties: {
                id: restaurant.id,
                libelle: restaurant.libelle,
                address: restaurant.address,
                rating: Math.round(restaurant.rating)
              }
            }
          })
        }
      })
      map.addLayer({
        id: 'restaurants',
        type: 'circle',
        source: 'restaurants',
        paint: {
          'circle-stroke-width': 1,
          'circle-stroke-color': 'black',
          'circle-radius': 4,
          'circle-color': ['case', ['==', ['get', 'rating'], 0], 'black', ['==', ['get', 'rating'], 1], 'red', ['==', ['get', 'rating'], 2], 'orange', ['==', ['get', 'rating'], 3], 'yellow', ['==', ['get', 'rating'], 4], 'lightgreen', ['==', ['get', 'rating'], 5], 'green', 'blue']
        }
      })
    }
  }, [mapIsLoaded])

  useEffect(() => {
    if (mapIsLoaded && map) {
      const source = map.getSource('restaurants') as mapboxgl.GeoJSONSource
      if (source) {
        source.setData({
          type: 'FeatureCollection',
          features: restaurants.map((restaurant) => {
            return {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [restaurant.longitude, restaurant.latitude]
              },
              properties: {
                id: restaurant.id,
                libelle: restaurant.libelle,
                address: restaurant.address,
                rating: Math.round(restaurant.rating)
              }
            }
          })
        })
      }
    }
  }, [restaurants, mapIsLoaded])

  return <div id="map" className="w-full h-64 rounded-2xl -z-10"></div>
}

export default Map
