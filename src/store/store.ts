import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

import user from "./reducers/user"

export const reducers = {
  user
}

const combinedReducers = combineReducers(reducers)
const persistedReducer = persistReducer({
  key: "root",
  storage
}, combinedReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    // Disabling this as it conflicts with "redux-persist"
    serializableCheck: false
  }),
})

export const persistor = persistStore(store)

export default store
