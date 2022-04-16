import { createStore } from "redux"

import combinedReducers from "./combinedReducers"

const store = createStore(combinedReducers)

export default store
