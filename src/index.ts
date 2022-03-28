import App from "app/App"
import { createElement } from "react"
import ReactDOM from "react-dom"

require("polyfills")
require("preload")

ReactDOM.render(createElement(App), document.getElementById("root"))
