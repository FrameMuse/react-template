import "./Button.scss"

import { MouseEvent, MouseEventHandler, useState } from "react"
import ReactGA from "react-ga4"
import { classMerge, classWithModifiers } from "utils/common"

import Loader from "../Loader/Loader"
import { ButtonBaseProps } from "./Button.types"

interface ButtonProps extends ButtonBaseProps {
  type?: "reset" | "submit"
  eventLabel?: string
  disabled?: boolean
  await?: boolean
  catch?: Error | boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button(props: ButtonProps) {
  const [error, setError] = useState(false)
  const [pending, setPending] = useState(false)
  function onClick(event: MouseEvent<HTMLButtonElement>) {
    GAButtonClick()

    handleOnClick(event)
  }

  async function awaitOnClick(event: MouseEvent<HTMLButtonElement>) {
    if (!props.await) {
      props.onClick?.(event)
      return
    }

    setPending(true)
    await props.onClick?.(event)
    setPending(false)
  }
  function handleOnClick(event: MouseEvent<HTMLButtonElement>) {
    if (!props.catch) {
      awaitOnClick(event)
      return
    }

    try {
      awaitOnClick(event)
    } catch (error) {
      if (typeof props.catch === "function") {
        if (error instanceof props.catch) {
          setError(true)
        }
      }

      throw error
    }
  }
  function GAButtonClick() {
    if (props.eventLabel == null) return

    ReactGA.event({
      category: "Button",
      action: "click",
      label: props.eventLabel
    })
  }

  const modifiers: string[] = []
  if (props.size) modifiers.push(props.size)
  if (props.color) modifiers.push(props.color)
  if (props.outline) modifiers.push("outline")
  if (pending) modifiers.push("pending")

  if (error) {
    return (
      <Button {...props}>Произошла ошибка</Button>
    )
  }

  return (
    <button className={classMerge(classWithModifiers("button", ...modifiers), props.className)} type={props.type || "button"} disabled={props.disabled || pending || error} aria-busy={pending} onClick={onClick}>
      {props.iconLeft && (
        <div className="button__icon">{props.iconLeft}</div>
      )}
      <div className="button__text">{props.children}</div>
      {props.iconRight && (
        <div className="button__icon">{props.iconRight}</div>
      )}
      <Loader className="button__loader" />
    </button>
  )
}

export default Button
