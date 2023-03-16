import { useContext } from "react"

import themeContext from "./themeContext"

/**
 * Allowed using in view(dumb) components.
 */
function useTheme() {
  const theme = useContext(themeContext)

  return theme
}

export default useTheme
