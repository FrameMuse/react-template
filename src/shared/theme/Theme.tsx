import { ReactNode } from "react"

import { ThemeScheme } from "./theme.types"
import themeContext from "./themeContext"

interface ThemeProps {
  theme: ThemeScheme
  children: ReactNode
}

function Theme(props: ThemeProps) {
  return (
    <themeContext.Provider value={props.theme}>
      {props.children}
    </themeContext.Provider>
  )
}

export default Theme
