import { StaticRoutes } from "app/AppRoutes"
import ButtonLink from "app/ui/common/Button/ButtonLink"
import Headings from "app/ui/layouts/Headings/Headings"
import { ErrorInfo } from "react"

import { ErrorBoundaryError, ErrorBoundaryReset } from "../ErrorBoundary/ErrorBoundary.types"

function ErrorFallback(reset: ErrorBoundaryReset, error?: ErrorBoundaryError, errorInfo?: ErrorInfo) {
  return (
    <>
      <Headings>
        <h2>Error {error?.name}</h2>
      </Headings>
      <pre>{errorInfo && JSON.stringify(errorInfo)}</pre>
      <ButtonLink to={StaticRoutes.Home} onClick={reset}>Go to home</ButtonLink>
    </>
  )
}

export default ErrorFallback
