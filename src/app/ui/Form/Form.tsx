import { DetailedHTMLProps, FormEvent, FormHTMLAttributes } from "react"
import { Enum } from "types"
import { FileToURLDataBase64 } from "utils/common"
import { ValuesOf } from "utils/types-utils"

type FormValue = string | string[] | number | number[] | boolean | null | undefined
type FormValues = Record<string, FormValue>

export interface FormState<V = FormValues> {
  keys: keyof V[]
  values: V
}
export interface FormStateEnum<E extends Enum<E>, V extends Record<ValuesOf<E>, FormValue>> {
  keys: keyof V[]
  values: V
}

interface FormProps<V> extends Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "onSubmit"> {
  onSubmit?: (state: FormState<V>, event: FormEvent<HTMLFormElement>) => void
}

function Form<V>(props: FormProps<V>) {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formState = await getFormState(event.currentTarget.elements) as unknown as FormState<V>

    props.onSubmit?.(formState, event)
  }
  return (
    <form {...props} onSubmit={onSubmit} />
  )
}

async function getFormState(elements: HTMLFormControlsCollection): Promise<{
  keys: string[]
  values: FormValues
}> {
  const keys: string[] = []
  for (const element of elements) {
    if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
      if (keys.includes(element.name)) continue
      keys.push(element.name)
    }
  }

  const values: FormState["values"] = {}
  for (const key of keys) {
    const next = elements.namedItem(key)

    if (next instanceof HTMLInputElement) {
      if (next.checked) {
        values[next.name] = true
        continue
      }

      const file = next.files?.[0]
      if (file instanceof File) {
        values[next.name] = await FileToURLDataBase64(file)
      }
    }

    if (next instanceof HTMLInputElement || next instanceof HTMLTextAreaElement) {
      if (next.value.length === 0) continue
      values[next.name] = isNaN(Number(next.value)) ? next.value : Number(next.value)
    }

    if (next instanceof RadioNodeList) {
      const radios = [...next] as HTMLInputElement[]
      const checks = radios.map(radio => radio.checked && radio.value)

      values[radios[0].name] = checks.flatMap(check => (!check || isNaN(Number(check))) ? [] : Number(check))
    }
  }

  return { keys, values }
}

export default Form