import { APP_TITLE } from "app/App"
import { Helmet } from "react-helmet"

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
    </>
  )
}

export default HomePage
