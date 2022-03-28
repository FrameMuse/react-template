import "app/assets/scss/base.scss"
import "app/assets/scss/app.scss"

import ClientAPI from "infrastructure/persistence/api/client"
import store from "infrastructure/persistence/redux/store"
import { ModalContainer } from "modules/modal/container"
import { Suspense } from "react"
import { ClientContextProvider } from "react-fetching-library"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import AppRouter from "./AppRouter"
import ErrorBoundary from "./components/services/ErrorBoundary/ErrorBoundary"

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ClientContextProvider client={ClientAPI}>
          <Suspense fallback="Loading...">
            <ErrorBoundary fallback="Error">
              <AppRouter />
              <ModalContainer />
              <ToastContainer />
            </ErrorBoundary>
          </Suspense>
        </ClientContextProvider>
      </Provider>
    </BrowserRouter>
  )
}


export default App
