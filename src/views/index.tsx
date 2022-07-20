import MediaFile from "app/ui/MediaFile/MediaFile"

function HomeView() {
  return (
    <MediaFile file={new File([], "asdasdasd", { type: "application/text" })} />
  )
}

export default HomeView
