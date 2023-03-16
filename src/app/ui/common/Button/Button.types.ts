import { ReactElement, ReactNode } from "react"

import { IconName } from "../Icon/Icon"

type ButtonSize = "small"
type ButtonColor = "dark" | "white" | "green" | "blue" | "gray" | "transparent"

export interface ButtonBaseProps {
  size?: ButtonSize
  /**
   * Can vary according to current theme.
   *
   * For example `"white"` may be mapped to `"dark"`.
   *
   * @default
   * "blue"
   */
  color?: ButtonColor

  outline?: boolean
  squared?: boolean

  className?: string

  iconLeft?: ReactElement | IconName
  iconRight?: ReactElement | IconName

  children: ReactNode
}
