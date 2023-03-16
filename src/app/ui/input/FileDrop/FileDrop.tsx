import "./FileDrop.scss"

import Icon from "app/ui/common/Icon/Icon"
import _ from "lodash"
import { ChangeEvent, DragEvent, ReactNode, useRef, useState } from "react"
import { toast } from "react-toastify"
import { useDropArea } from "react-use"
import { classWithModifiers } from "utils/common"

const FILE_DROP_TEXT = "Choose or drop files to upload"
const FILE_DROP_SOME_NON_UNIQUE = "Some files have the same name. Duplicates are ignored."

interface FileDropProps {
  name?: string
  label?: ReactNode
  accept?: string

  onChange?(value: File[]): void
}

function FileDrop(props: FileDropProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [files, setFiles] = useState<File[]>([])
  const [dropAreaBond, { over }] = useDropArea({ onFiles: addFiles })
  /**
   * !!! Workaround !!!
   *
   * https://github.com/streamich/react-use/issues/2368#issuecomment-1399292888
   */
  function onDragLeave(event: DragEvent<HTMLElement>) {
    if (!(event.relatedTarget instanceof Node)) return
    if (event.currentTarget.contains(event.relatedTarget)) return

    dropAreaBond.onDragLeave(event)
  }

  function addFiles(filesNew: File[]) {
    const filesMerged = [...files, ...filesNew]
    const filesWithUniqueName = _.uniqBy(filesMerged, file => file.name)
    setFiles(filesWithUniqueName)

    // Info message
    if (filesMerged.length !== filesWithUniqueName.length) {
      toast.info(FILE_DROP_SOME_NON_UNIQUE)
    }
  }
  function removeFile(fileOld: File) {
    setFiles(files.filter(file => file !== fileOld))
  }

  function onClick() {
    inputRef.current?.click()
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()

    const target = event.currentTarget

    const files = target.files
    if (files === null) return

    const file = files[0] as File | undefined
    if (file == null) return

    addFiles([...files])
  }

  return (
    <div className="file-drop">
      {props.label && (
        <div className="file-drop__label">{props.label}</div>
      )}
      <div className={classWithModifiers("file-drop-area", over && "over")} draggable {...dropAreaBond} onDragLeave={onDragLeave} onClick={onClick} aria-haspopup>
        <div className="file-drop-area__info">
          <Icon className="file-drop-area__icon" name="box-out" />
          <span className="file-drop-area__text">{FILE_DROP_TEXT}</span>
        </div>
        {files.length > 0 && (
          <div className="file-drop-area__files">
            {files.map(file => (
              <button className="file-drop-area__file" type="button" onClick={event => (event.stopPropagation(), removeFile(file))} key={file.name}>
                <span className="file-drop-area__text">{file.name}</span>
                <Icon name="cross-circle" />
              </button>
            ))}
          </div>
        )}
      </div>
      <input
        className="file-drop__input"
        name={props.name}
        type="file"
        accept={props.accept}
        multiple
        onChange={onChange}
        aria-hidden={false}

        ref={inputRef}
      />
    </div>
  )
}

export default FileDrop
