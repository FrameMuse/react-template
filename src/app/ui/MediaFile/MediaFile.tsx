import "./MediaFile.scss"

interface MediaFileProps {
  file: File
}

/**
 * 
 * Visualizing media file
 */
function MediaFile(props: MediaFileProps) {
  return (
    <div className="media-file">
      <div className="media-file__name">{props.file.name}</div>
      <div className="media-file__type">{props.file.type}</div>
    </div>
  )
}

export default MediaFile
