type mariaDbId = number

export interface IReview {
  userId: mariaDbId
  restaurantId: mariaDbId
  rating: number
  comment: string
}

export interface IRestaurant {
  id: mariaDbId
  libelle: string
  address: string
  rating: number
  category: string
  rating_count: number
  reviews?: IReview[]
  latitude: number
  longitude: number
}
