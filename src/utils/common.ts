import "./extensions"

import { Buffer } from "buffer"
import { URLDataBase64 } from "interfaces/utilities"
import { ExtractInterpolations } from "interfaces/utilities"
import { SyntheticEvent } from "react"

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
 * @returns `state1=6&state2=horse` without `?`
 */
export function createQuery(queryObject?: Record<string, unknown> | null): string {
  if (!queryObject || !Object.keys(queryObject).length) return ""

  const queryKeys = Object.keys(queryObject)
  const queryArray = queryKeys.map(key => {
    const value = queryObject[key]
    if (value) {
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
 * Stops propagation from container
 * @param callback any function
 * @returns mouse event handler
 */
export function stopPropagation(callback?: Function | null) {
  return ({ target, currentTarget }: Event | SyntheticEvent) => {
    if (target instanceof Element && currentTarget instanceof Element) {
      if (target !== currentTarget) return
    }

    callback?.()
  }
}

export function inputValue(callback: Function) {
  return (event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    callback(event.currentTarget.value)
  }
}