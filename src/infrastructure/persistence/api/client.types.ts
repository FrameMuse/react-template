import { Action as BaseAction } from "react-fetching-library"

declare module "react-fetching-library" {
  // https://marcin-piela.github.io/react-fetching-library/#/?id=config-object
  interface Action {
    params?: Record<string, unknown>
  }
}

export interface APIResponseError {
  error: {
    type: "error" | "warning"
    code: string | number
    detail: unknown // For development
  }
}

interface ActionConfig {
  skipAuth: boolean
  skipCache: boolean
}

export type Action<P = unknown> = BaseAction<P & APIResponseError, Partial<ActionConfig>>
