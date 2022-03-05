import { postError } from "api/actions/error"
import ClientAPI from "api/client"
import { Component, ErrorInfo, ReactNode } from "react"

interface ErrorBoundaryProps {
  deps?: unknown[]
  fallback: ReactNode | ((reset: () => void, errorId?: number) => JSX.Element)
}
interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorId?: number
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState | null {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch<E extends Error>(error: E, errorInfo: ErrorInfo) {
    ClientAPI
      .query(postError(error.name, error.message, [error.stack || "", errorInfo.componentStack]))
      .then(({ error, payload }) => {
        if (error || !payload) return
        this.setState({ errorId: payload.id })
      })
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined, errorId: undefined })
  }
  render() {
    if (this.state.hasError) {
      if (typeof this.props.fallback === "function") {
        return this.props.fallback(this.reset, this.state.errorId)
      }

      return this.props.fallback
    }

    return this.props.children
  }
}

export default ErrorBoundary
