import "app/assets/scss/base.scss"

import ClientAPI from "infrastructure/persistence/api/client"
import store from "infrastructure/persistence/redux/store"
import { ReactNode, Suspense } from "react"
import { ClientContextProvider } from "react-fetching-library"
import { ModalContainer } from "react-modal-global"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import AppRoutes from "./AppRouter"
import CookiesNotice from "./containers/CookiesNotice/CookiesNotice"
import ErrorBoundary from "./containers/ErrorBoundary/ErrorBoundary"
import ErrorFallback from "./containers/ErrorFallback/ErrorFallback"

function App() {
  return (
    <AppProviders>
      <Suspense fallback="Loading...">
        <ErrorBoundary fallback={ErrorFallback}>
          <AppRoutes />
          <CookiesNotice />
          <ModalContainer />
          <ToastContainer />
        </ErrorBoundary>
      </Suspense>
    </AppProviders>
  )
}

function AppProviders(props: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ClientContextProvider client={ClientAPI}>
          {props.children}
        </ClientContextProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
