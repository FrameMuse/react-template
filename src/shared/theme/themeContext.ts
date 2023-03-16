import { createContext } from "react"

import { ThemeScheme } from "./theme.types"

const themeContext = createContext<ThemeScheme>("light")
export default themeContext
