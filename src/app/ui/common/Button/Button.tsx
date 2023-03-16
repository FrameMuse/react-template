import "./Button.scss"

import Loader from "app/ui/display/Loader/Loader"
import { MouseEvent, MouseEventHandler, useState } from "react"
import ReactGA from "react-ga4"
import { GAEventAction, GAEventCategory, GAEventLabel } from "services/ga"
import useTheme from "shared/theme/useTheme"
import { classMerge, classWithModifiers } from "utils/common"

import { buttonColorMap, ButtonIconize } from "./Button.helpers"
import { ButtonBaseProps } from "./Button.types"

interface ButtonProps extends ButtonBaseProps {
  type?: "reset" | "submit"
  eventLabel?: GAEventLabel
  disabled?: boolean
  /**
   * If `onClick` returns promise, the button will be blocked until resolved.
   */
  await?: boolean
  pending?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button(props: ButtonProps) {
  const theme = useTheme()

  const [pending, setPending] = useState(false)
  async function onClick(event: MouseEvent<HTMLButtonElement>) {
    if (props.await) {
      await onClickPromise(event)
    } else {
      props.onClick?.(event)
    }
    /* --- Google Analytics --- */
    if (props.eventLabel) {
      gaClickEvent()
    }
  }
  async function onClickPromise(event: MouseEvent<HTMLButtonElement>) {
    setPending(true)
    try {
      await props.onClick?.(event)
    } finally {
      setPending(false)
    }
  }
  function gaClickEvent() {
    ReactGA.event({
      category: GAEventCategory.User,
      action: GAEventAction.ClickedButton,
      label: String(props.eventLabel)
    })
  }

  const modifiers: string[] = []
  if (props.color) modifiers.push(buttonColorMap(props.color, theme))
  if (props.size) modifiers.push(props.size)

  if (props.outline) modifiers.push("outline")
  if (props.squared) modifiers.push("squared")

  if (pending || props.pending) modifiers.push("pending", "disabled")

  return (
    <button className={classMerge(classWithModifiers("button", ...modifiers), props.className)} type={props.type || "button"} disabled={props.disabled || pending} onClick={onClick}>
      <ButtonIconize icon={props.iconLeft} />
      <div className="button__text">{props.children}</div>
      <ButtonIconize icon={props.iconRight} />
      <div className="button__loader">
        <Loader />
      </div>
    </button>
  )
}

export default Button
