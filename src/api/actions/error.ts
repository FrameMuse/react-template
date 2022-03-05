import { Action } from "api/client"


export const postError = (name: string, message: string, stack: string | string[]): Action<{ id: number; }> => ({
  method: "POST",
  endpoint: "/error",
  body: { name, message, stack }
})
