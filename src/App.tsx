import { FunctionComponent, Suspense, createElement, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={createElement(lazy(() => import('./components/pages/HomePage')))} />
        <Route path="/restaurant/:restaurantId" element={createElement(lazy(() => import('./components/pages/RestaurantDetail')))} />
        <Route path="/restaurant/:restaurantId/addComment" element={createElement(lazy(() => import('./components/Widget/Widget')))} />
        <Route path="/restaurant/:restaurantId/addComment/finish" element={createElement(lazy(() => import('./components/WidgetEnd/WidgetEnd')))} />
        <Route path="/login" element={createElement(lazy(() => import('./components/pages/LoginPage')))} />
        <Route path="/logout" element={createElement(lazy(() => import('./components/pages/LogoutPage')))} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )
}

export default App
