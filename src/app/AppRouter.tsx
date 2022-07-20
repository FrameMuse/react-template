import { Route, Routes } from "react-router"
import HomeView from "views"

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/">
        <Route path="*" element="<HomeView />" />
        <Route element="<ViewLayout />">
          <Route index element="<HomeView />" />
          ...
          </Route>
        </Route> */}
      <Route index element={<HomeView />} />
    </Routes>
  )
}

export default AppRoutes
