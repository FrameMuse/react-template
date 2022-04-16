import App from "app/App"
import { createElement } from "react"
import { createRoot } from "react-dom/client"

require("polyfills")
require("preload")

const rootElement = document.getElementById("root")
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(createElement(App))
}
