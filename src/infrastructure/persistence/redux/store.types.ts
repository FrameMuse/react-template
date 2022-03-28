import { reducers } from "./combinedReducers"

type RS = typeof reducers
export type ReducersType = { [key in keyof RS]: ReturnType<RS[key]> }
export type MapActions<Actions extends Record<string, any>> = {
  [key in keyof Actions]: {
    type: key
    payload: Actions[key]
  }
}
