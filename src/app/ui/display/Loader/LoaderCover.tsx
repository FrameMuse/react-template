import "./Loader.scss"

import useTheme from "shared/theme/useTheme"
import { classWithModifiers } from "utils/common"

import Loader from "./Loader"

interface LoaderCoverProps {
  absolute?: boolean
  white?: boolean
  dimmed?: boolean
}

function LoaderCover(props: LoaderCoverProps) {
  const theme = useTheme()

  return (
    <div className={classWithModifiers("loader-cover", props.absolute && "absolute", (props.white || theme === "dark") && "white", props.dimmed && "dimmed")}>
      <Loader className="loader-cover__loader" />
    </div>
  )
}

export default LoaderCover
