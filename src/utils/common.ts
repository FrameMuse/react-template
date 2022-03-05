import "./extensions"

import { Buffer } from "buffer"
import { FormElements, URLDataBase64 } from "interfaces/utilities"
import { ExtractInterpolations } from "interfaces/utilities"

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

export function toBase64(value: unknown) {
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
 *
 * @param elements
 * @param keys
 * @returns
 */
export function getFormElements<K extends string>(elements: HTMLFormControlsCollection, ...keys: K[]): Record<K, string> | null {
  const data = Object.fromEntries(keys.map(key => [key, ""])) as Record<K, string>

  for (const element of elements) {
    if (!(element instanceof HTMLInputElement)) continue
    if (!keys.includes(element.name as K)) continue
    if (!element.value.length) return null

    data[element.name as K] = element.value
  }

  return data
}


/**
 * Interpolates {variable} in string
 */
export function interpolate<T extends string>(value: T, vars: Record<ExtractInterpolations<T>, string | number>): string {
  const varKeys = Object.keys(vars) as ExtractInterpolations<T>[]
  return varKeys.reduce((result: string, next) => result.replace(new RegExp(`{${next}}`, "g"), String(vars[next])), value)
}


export function getFormInputs<U extends string = string>(elements: FormElements<U> | HTMLFormControlsCollection) {
  return [...elements].reduce<Record<U | (string & {}), string | number>>((result, next) => {
    if (next instanceof HTMLInputElement) {
      return { ...result, [next.name]: next.value }
    }
    return result
  }, {} as any)
}

export function getCheckedValues(inputs: RadioNodeList & HTMLInputElement[]) {
  return [...inputs].filter(input => input.checked).map(input => input.value)
}

export function noop(): void { /* Do nothing */ }
