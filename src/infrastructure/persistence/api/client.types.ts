import { Action as BaseAction } from "react-fetching-library"

declare module "react-fetching-library" {
  // https://marcin-piela.github.io/react-fetching-library/#/?id=config-object
  interface Action {
    params?: Record<string, unknown>
  }
}

export interface APIResponseError {
  status: boolean
  msg: string
}

interface ActionConfig {
  skipAuth: boolean
  skipCache: boolean
}


export type Action<P = unknown> = BaseAction<ActionPayload<P>, Partial<ActionConfig>>
export type ActionPayload<P> = P & APIResponseError
export type ExtractActionPayload<A extends Action> = A extends Action<infer P> ? P : never

export type MapPredicate<P, M> = (payload: P) => M