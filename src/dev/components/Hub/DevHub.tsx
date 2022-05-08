import "./DevHub.scss"

import { useState } from "react"
import { classWithModifiers } from "utils/common"

import { ReactComponent as PalasCatSVG } from "./pallas-cat.svg"

function DevHub() {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="dev-hub">
      <div className="dev-hub__container">
        <div className="dev-hub__info">
          <h1 className="dev-hub__title">Welcome to <br /> Pallas Cat's DevHub</h1>
          <p className="dev-hub__desc"></p>
        </div>
        <div className="dev-hub-tools">
          <div className={classWithModifiers("dev-hub-tools__list", expanded && "expanded")}>
            <button className="dev-hub-tool">Show API Actions</button>
            <button className="dev-hub-tool">Minimize</button>
          </div>
          <button className="dev-hub-button" type="button" onClick={() => setExpanded(!expanded)}>
            <PalasCatSVG className="dev-hub-button__icon" />
          </button>
          <div className={classWithModifiers("dev-hub-tools__list", expanded && "expanded")}>
            <button className="dev-hub-tool">Show API Actions</button>
            <button className="dev-hub-tool">Minimize</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevHub
