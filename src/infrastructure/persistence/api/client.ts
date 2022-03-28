import { createClient } from "react-fetching-library"

import { cacheProvider } from "./cache"
import { requestInterceptor, responseInterceptor } from "./interceptors"

export const ClientAPI = createClient({
  requestInterceptors: [requestInterceptor],
  responseInterceptors: [responseInterceptor],
  cacheProvider,
  fetch: (input, init) => {
    const response = fetch(input, init)
    // Error displaying
    if (process.env.NODE_ENV === "development") {
      response.catch(error => {
        if (error.message.includes("The user aborted a request.")) return
        throw error
      })
    }
    // ...
    return response
  }
})

if (process.env.NODE_ENV === "development") {
  // https://webpack.js.org/guides/dependency-management/#context-module-api
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const importAll = r => r.keys().reduce((a, k) => ({ ...a, ...r(k) }), {})
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.ClientAPI = ClientAPI
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.ActionsAPI = importAll(require.context("./actions/", true, /\.ts$/, "sync"))
}

export default ClientAPI

