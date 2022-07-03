import * as Sentry from "@sentry/react"
import { BrowserTracing } from "@sentry/tracing"

function defaultTransformSentryEvent(event: Sentry.Event): Sentry.Event {
  // const reduxStoreState = ReduxStore.getState()
  // const user = reduxStoreState.user.auth ? reduxStoreState.user : null
  return {
    ...event,
    platform: "typescript",
    // user: {
    //   ...event.user,
    //   id: user?.id.toString(),
    //   username: user?.fullName.toString(),
    // }
  }
}

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing],
  // maxBreadcrumbs: 50,
  // allowUrls: [window.location.href, process.env.REACT_APP_API_HOST, process.env.REACT_APP_SOCKET_HOST],
  enabled: Boolean(process.env.REACT_APP_SENTRY),
  release: process.env.REACT_APP_VERSION,
  initialScope: {
    tags: {
      app: process.env.REACT_APP_NAME
    }
  },
  beforeBreadcrumb(breadcrumb, hint?) {
    if (["log", "warning"].includes(breadcrumb.level || "")) {
      return null
    }

    return breadcrumb
  },
  beforeSend(event, hint?) {
    // console.log(event)
    // event.user?.ip_address
    // if (hint != null) {
    //   console.log(hint)
    //   // hint.data
    // }

    if (event.breadcrumbs != null) {
      const lastBreadcrumb = event.breadcrumbs[event.breadcrumbs.length - 1]
      if (lastBreadcrumb.category === "fetch") {
        const lastBreadcrumbData = lastBreadcrumb.data
        const lastBreadcrumbURL = new URL(lastBreadcrumbData?.url)

        return defaultTransformSentryEvent({
          ...event,
          exception: {
            values: [{
              type: "Server-side error",
              value: "error on " + lastBreadcrumbURL.pathname
            }],
          },
          message: "error on " + lastBreadcrumbURL.pathname
        })
      }
    }

    return defaultTransformSentryEvent(event)
  },

  environment: process.env.NODE_ENV,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.01 : 1.00,
})