import "./extensions"

import { Buffer } from "buffer"
import { SyntheticEvent } from "react"
import { URLDataBase64 } from "types"

import { ExtractInterpolations } from "./types-utils"

/**
 *
 * @returns `class1 class2`
 */
export function classMerge(...classNames: Array<string | null | undefined>): string {
  const space = " "
  return classNames.filter(Boolean).join(space)
}

/**
 * Join modifiers with origin class
 * @returns `"origin-class origin-class--modifier"`
 */
export function classWithModifiers(originClass: string, ...modifiers: Array<string | number | false | null | undefined>): string {
  modifiers = modifiers.filter(Boolean)
  if (!modifiers.length) return originClass

  const space = " "
  const separator = "--"

  modifiers = modifiers.map(modifier => originClass + separator + modifier)
  return originClass + space + modifiers.join(space)
}

/**
 * Creates query from given object
 * - Stringify objects and arrays
 * - Supports deep nesting
 * @returns `state1=6&state2=horse` without `?`
 */
export function createQuery(queryObject?: Record<string | number, unknown> | null): string {
  if (!queryObject || !Object.keys(queryObject).length) return ""

  const queryKeys = Object.keys(queryObject)
  const queryArray = queryKeys.map(key => {
    const value = queryObject[key]
    if (value) {
      if (isDictionary(value)) {
        return createQuery(value)
      }

      return encodeURIComponent(key) + "=" + encodeURIComponent(String(value))
    }
    return ""
  })

  return queryArray.filter(Boolean).join("&")
}

export function toBase64<T = unknown>(value: T | null | undefined) {
  if (value == null) return String(value)
  return Buffer.from(JSON.stringify(value)).toString("base64")
}

export function FileToURLDataBase64(file: File): Promise<URLDataBase64> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as URLDataBase64)
    reader.onerror = reject
  })
}


export async function getFileFromURL(url: string) {
  const fileName = url.slice(url.lastIndexOf("/") + 1)

  const response = await fetch(url)
  const Uint8Array = (await response.body?.getReader()?.read())?.value

  return new File(Uint8Array ? [Uint8Array] : [], fileName, { type: response.headers.get("content-type") || "image" })
}


/**
 * Interpolates {variable} in string
 */
export function interpolate<T extends string>(value: T, vars: Record<ExtractInterpolations<T>, string | number>): string {
  const varKeys = Object.keys(vars) as ExtractInterpolations<T>[]
  return varKeys.reduce((result: string, next) => result.replace(new RegExp(`{${next}}`, "g"), String(vars[next])), value)
}


/**
 * Stops propagation from container. Callback exists only on the `current` target
 * @param callback any function
 * @returns mouse event handler
 */
export function stopPropagation(callback?: () => void | null) {
  return ({ target, currentTarget }: Event | SyntheticEvent) => {
    if (target instanceof Element && currentTarget instanceof Element) {
      if (target !== currentTarget) return
    }

    callback?.()
  }
}

export function inputValue(callback: (value: string) => void) {
  return (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    callback(event.currentTarget.value)
  }
}

/**
 * Propagates the array, creating minimum fill level of the array by duplicating its items
 * @returns new array
 */
export function minFill<T>(array: T[], minLevel?: number): T[] {
  if (array.length === 0) return array
  if (!minLevel || array.length >= minLevel) {
    return array
  }

  const newArray: T[] = []
  for (let i = 0; i < (minLevel - array.length); i++) {
    newArray.push(...array.slice(0, minLevel - newArray.length))
  }
  return newArray
}

export function isDictionary(object: unknown): object is Record<keyof unknown, unknown> {
  return object instanceof Object && object.constructor === Object
}