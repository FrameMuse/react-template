import { toast } from "react-toastify"
import { useCopyToClipboard } from "react-use"

import useReportError from "./useReportError"

const COPIED_TO_CLIPBOARD = "Copied to clipboard."

function useAppCopyToClipboard() {
  const reportError = useReportError()
  const [copyToClipboardState, copyToClipboardOriginal] = useCopyToClipboard()

  function copyToClipboard(value: string) {
    copyToClipboardOriginal(value)

    if (copyToClipboardState.error) {
      reportError(copyToClipboardState.error)
      return
    }

    toast.success(COPIED_TO_CLIPBOARD)
  }

  // Enforce base naming
  return { copyToClipboard, copyToClipboardState }
}

export default useAppCopyToClipboard
