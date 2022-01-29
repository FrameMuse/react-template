import Localization from "modules/localization/controller"
import useLocalization from "modules/localization/hook"


function App() {
  const ll = useLocalization(ll => ll)
  return (
    <>
      <button onClick={() => Localization.transit("ru")}>To russian</button>
      <button onClick={() => Localization.transit("en")}>To english</button>
      {ll?.lang}
    </>
  )
}


export default App
