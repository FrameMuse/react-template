import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import { BaseLayout } from "./areas/base"
import HomePage from "./pages/home"
import UIKitPage from "./pages/ui-kit"
import Column from "./ui/layouts/Column/Column"
import Headings from "./ui/layouts/Headings/Headings"
import ErrorCover from "./ui/synthetic/ErrorCover/ErrorCover"

function resetScroll() {
  window.scrollTo(0, 0)
}

function AppRoutes() {
  const location = useLocation()
  useEffect(() => resetScroll(), [location.pathname])

  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path={StaticRoutes.Home} element={<HomePage />} />
        {/* <Route path={StaticRoutes.Home} element={<HomeView />} /> */}

        <Route path={StaticRoutes.UIKit} element={<UIKitPage />} />

        {/* Error view */}
        <Route path="*" element={(
          <Column justifyItems="center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <ErrorCover>
              <Headings>
                <h3>Not found</h3>
                <p>{"Couldn't"} find the page.</p>
              </Headings>
            </ErrorCover>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Column>
        )} />
      </Route>
    </Routes>
  )
}

/**
 * Only base routes are declared globally, local (deeper) ones better keep isolated (to not export).
 */
export enum StaticRoutes {
  Home = "/",

  ContactUs = "/contact-us",
  FAQ = "/purchase#faq",
  Reviews = "/purchase#reviews",
  PrivacyPolicy = "/privacy-policy",
  Terms = "/terms",
  AboutUs = "/about-us",
  FullCourse = "/full-course",
  Purchase = "/purchase",
  Profile = "/profile",

  UIKit = "/ui-kit",
}

export default AppRoutes
