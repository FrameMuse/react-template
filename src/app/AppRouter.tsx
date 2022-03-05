import { Route, Routes } from "react-router"

function AppRouter() {
  return (
    <Routes>
      <AppBasicRoutes />
    </Routes>
  )
}

export function AppBasicRoutes() {
  return (
    <Routes>
      <Route path="/" />
    </Routes>
  )
}

export default AppRouter
