import { Action } from "api/client"

// import { PostAccountTokenResponse } from "./account.types"

export const getAccountMe: Action = {
  method: "GET",
  endpoint: "/account/me"
}

export const patchAccountMe: Action = {
  method: "PATCH",
  endpoint: "/account/me"
}

export const postAccountToken = (email: string, password: string): Action<{ id: number }> => ({
  method: "POST",
  endpoint: "/account/token",
  body: { email, password }
})

export const deleteAccountToken: Action = {
  method: "DELETE",
  endpoint: "/account/token"
}
