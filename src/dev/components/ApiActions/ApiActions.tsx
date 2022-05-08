import "./ApiActions.scss"

import Button from "app/ui/Button/Button"
import Details from "app/ui/Details/Details"
import { useState } from "react"
import { inputValue } from "utils/common"
import { createSearchFilterPredicate } from "utils/tools/search"

function getActionsList(): Record<string, Function> {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const actions = require("infrastructure/persistence/api/data/actions")
  return actions
}

const actionsList = getActionsList()
const actionsKeys = Object.keys(actionsList)

function ApiActions() {
  const [search, setSearch] = useState("")
  const searchFilterPredicate = createSearchFilterPredicate(search)

  function consoleGroup(groupName: string, ...values: unknown[]) {
    console.group(groupName)
    console.log(...values.map(c => `${c}\n`))
    console.groupEnd()
  }
  return (
    <div className="api-actions">
      <h1>API</h1>
      <h2>Search</h2>
      <input className="api-actions__search" type="text" placeholder="API Actions Search" onChange={inputValue(setSearch)} />
      <h2>Actions</h2>
      <div className="api-actions__list">
        {actionsKeys.filter(searchFilterPredicate).map(actionKey => (
          <div className="api-action" key={actionKey}>
            <Details summary={<div className="api-action__title">{actionKey}</div>}>
              <code className="api-action__code">
                <pre>{actionsList[actionKey].toString()}</pre>
              </code>
              <a href={process.env.REACT_APP_API_HOST + "/#/"}></a>
              This `Action` should be accessed in `APIActions` by <br />
              <button type="button" onClick={() => consoleGroup("Action", `APIActions.${actionKey}`, actionsList[actionKey])}>`APIActions.{actionKey}`</button>
              {/* <div className="api-action__buttons">
                <Button onClick={() => console.log(actionsList[actionKey])}>Reveal this action in console</Button>
              </div> */}
            </Details>
          </div>
        ))}
      </div>
    </div >
  )
}

export default ApiActions
