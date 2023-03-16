import "./Button.scss"

import Loader from "app/ui/display/Loader/Loader"
import { MouseEvent, MouseEventHandler, useState } from "react"
import ReactGA from "react-ga4"
import { GAEventAction, GAEventCategory } from "services/ga"
import useTheme from "shared/theme/useTheme"
import { classMerge, classWithModifiers } from "utils/common"

import Icon, { IconName } from "../Icon/Icon"
import { buttonColorMap } from "./Button.helpers"
import { ButtonBaseProps } from "./Button.types"

interface ButtonIconProps extends Omit<ButtonBaseProps, "iconLeft" | "iconRight" | "children"> {
  type?: "reset" | "submit"
  eventLabel?: string
  name: IconName
  disabled?: boolean
  await?: boolean
  pending?: boolean
  /**
   * As such buttons have no text, you should always define a label.
   *
   * This is to enforce you do this ^-^
   */
  ariaLabel: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function ButtonIcon(props: ButtonIconProps) {
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
  // Defines that this is icon-only button (button with only icon as `children`)
  modifiers.push("icon-only")
  if (props.color) modifiers.push(buttonColorMap(props.color, theme))
  if (props.size) modifiers.push(props.size)

  if (props.outline) modifiers.push("outline")
  if (props.squared) modifiers.push("squared")

  if (pending || props.pending) modifiers.push("pending")

  return (
    <button className={classMerge(classWithModifiers("button", ...modifiers), props.className)} type={props.type || "button"} disabled={props.disabled || pending} onClick={onClick} aria-label={props.ariaLabel}>
      {/* Pass size to `button__icon` so now it controls the padding by itself */}
      <div className={classMerge(classWithModifiers("button__icon", props.size), props.className)}>
        <Icon name={props.name} />
      </div>
      <div className="button__loader">
        <Loader />
      </div>
    </button>
  )
}

export default ButtonIcon
