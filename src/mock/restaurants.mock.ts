type mariaDbId = number

export interface IReview {
  userId: mariaDbId
  restaurantId: mariaDbId
  rating: number
  comment: string
}

export interface IRestaurant {
  id: mariaDbId
  name: string
  address: string
  rating: number
  categories: string
  reviews?: IReview[]
  location: {
    lat: number
    lng: number
  }
}

export const RESTAURANT_MOCK: IRestaurant[] = [
  {
    id: 1,
    name: 'Le Wok',
    address: '1 rue de la paix',
    categories: 'chinois',
    location: {
      lat: 48.856614,
      lng: 2.3522219
    },
    rating: 4,
    reviews: [
      {
        comment: 'Super restaurant',
        rating: 5,
        restaurantId: 1,
        userId: 1
      },
      {
        comment: 'Nul',
        rating: 1,
        restaurantId: 1,
        userId: 2
      },
      {
        comment: 'Pas mal',
        rating: 3,
        restaurantId: 1,
        userId: 3
      }
    ]
  },
  {
    id: 2,
    name: 'Le Wok 2',
    address: '2 rue de la paix',
    categories: 'chinois',
    location: {
      lat: 48.850827,
      lng: 2.374234
    },
    rating: 4,
    reviews: [
      {
        comment: 'Super restaurant',
        rating: 5,
        restaurantId: 2,
        userId: 1
      },
      {
        comment: 'Nul',
        rating: 1,
        restaurantId: 2,
        userId: 2
      },
      {
        comment: 'Pas mal',
        rating: 3,
        restaurantId: 2,
        userId: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Le Wok 3',
    address: '3 rue de la paix',
    categories: 'chinois',
    location: {
      lat: 40,
      lng: -1
    },
    rating: 4,
    reviews: [
      {
        comment: 'Super restaurant',
        rating: 5,
        restaurantId: 3,
        userId: 1
      },
      {
        comment: 'Nul',
        rating: 1,
        restaurantId: 3,
        userId: 2
      },
      {
        comment: 'Pas mal',
        rating: 3,
        restaurantId: 3,
        userId: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Le Wok 3',
    address: '3 rue de la paix',
    categories: 'chinois',
    location: {
      lat: 40,
      lng: -1
    },
    rating: 4,
    reviews: [
      {
        comment: 'Super restaurant',
        rating: 5,
        restaurantId: 3,
        userId: 1
      },
      {
        comment: 'Nul',
        rating: 1,
        restaurantId: 3,
        userId: 2
      },
      {
        comment: 'Pas mal',
        rating: 3,
        restaurantId: 3,
        userId: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Le Wok 3',
    address: '3 rue de la paix',
    categories: 'chinois',
    location: {
      lat: 40,
      lng: -1
    },
    rating: 4,
    reviews: [
      {
        comment: 'Super restaurant',
        rating: 5,
        restaurantId: 3,
        userId: 1
      },
      {
        comment: 'Nul',
        rating: 1,
        restaurantId: 3,
        userId: 2
      },
      {
        comment: 'Pas mal',
        rating: 3,
        restaurantId: 3,
        userId: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Le Wok 3',
    address: '3 rue de la paix',
    categories: 'chinois',
    location: {
      lat: 40,
      lng: -1
    },
    rating: 4,
    reviews: [
      {
        comment: 'Super restaurant',
        rating: 5,
        restaurantId: 3,
        userId: 1
      },
      {
        comment: 'Nul',
        rating: 1,
        restaurantId: 3,
        userId: 2
      },
      {
        comment: 'Pas mal',
        rating: 3,
        restaurantId: 3,
        userId: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Le Wok 3',
    address: '3 rue de la paix',
    categories: 'chinois',
    location: {
      lat: 40,
      lng: -1
    },
    rating: 4,
    reviews: [
      {
        comment: 'Super restaurant',
        rating: 5,
        restaurantId: 3,
        userId: 1
      },
      {
        comment: 'Nul',
        rating: 1,
        restaurantId: 3,
        userId: 2
      },
      {
        comment: 'Pas mal',
        rating: 3,
        restaurantId: 3,
        userId: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Le Wok 3',
    address: '3 rue de la paix',
    categories: 'chinois',
    location: {
      lat: 40,
      lng: -1
    },
    rating: 4,
    reviews: [
      {
        comment: 'Super restaurant',
        rating: 5,
        restaurantId: 3,
        userId: 1
      },
      {
        comment: 'Nul',
        rating: 1,
        restaurantId: 3,
        userId: 2
      },
      {
        comment: 'Pas mal',
        rating: 3,
        restaurantId: 3,
        userId: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Le Wok 3',
    address: '3 rue de la paix',
    categories: 'chinois',
    location: {
      lat: 40,
      lng: -1
    },
    rating: 4,
    reviews: [
      {
        comment: 'Super restaurant',
        rating: 5,
        restaurantId: 3,
        userId: 1
      },
      {
        comment: 'Nul',
        rating: 1,
        restaurantId: 3,
        userId: 2
      },
      {
        comment: 'Pas mal',
        rating: 3,
        restaurantId: 3,
        userId: 3
      }
    ]
  },
  {
    id: 3,
    name: 'Le Wok 3',
    address: '3 rue de la paix',
    categories: 'chinois',
    location: {
      lat: 40,
      lng: -1
    },
    rating: 4,
    reviews: [
      {
        comment: 'Super restaurant',
        rating: 5,
        restaurantId: 3,
        userId: 1
      },
      {
        comment: 'Nul',
        rating: 1,
        restaurantId: 3,
        userId: 2
      },
      {
        comment: 'Pas mal',
        rating: 3,
        restaurantId: 3,
        userId: 3
      }
    ]
  }
]
