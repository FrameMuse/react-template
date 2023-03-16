import { InferActions } from "store/store.types"

import { User, UserType } from "./types"

export const USER_GUEST: User = {
  id: -1,

  signed: false,
  type: UserType.Default,
  avatar: "/static/images/guest-avatar.jpg",
  userName: "MrGuest",
  // firstName: "",
  // lastName: "",

  createdAt: new Date(-1),
}

const initialState: User = { ...USER_GUEST }

interface Actions {
  USER_UPDATE: Partial<User>
  USER_RESET: void
}

export default (state = initialState, action: InferActions<Actions>): User => {
  switch (action.type) {

    case "USER_UPDATE":
      return { ...state, ...action.payload }

    case "USER_RESET":
      return { ...initialState }

    default:
      return state
  }
}


export const updateUser = (payload: Actions["USER_UPDATE"]) => ({
  type: "USER_UPDATE",
  payload
}) as const

export const resetUser = () => ({
  type: "USER_RESET"
}) as const
