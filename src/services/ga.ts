import ReactGA from "react-ga4"

export enum GAEventAction {
  ClickedButton = "Clicked Button",
  Visit = "Visit",
}

export enum GAEventCategory {
  User = "User",
  PageView = "Page"
}

/**
 * @example
 * PlanGetStarted = "Plan - Get Started",
 * @example
 * UpdateUserData = "Update user's data"
 */
export enum GAEventLabel { }


function initGA() {
  if (process.env.REACT_APP_GA_ID) {
    ReactGA.initialize(process.env.REACT_APP_GA_ID)
  } else {
    const message = ".env variable `REACT_APP_GA_ID` is empty, GA will not be initialized."
    alert(message)
    console.warn(message)
  }
}

export default initGA
