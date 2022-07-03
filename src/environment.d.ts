declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Project settings
      readonly REACT_APP_NAME: string
      readonly REACT_APP_VERSION: string

      // Sentry settings
      /**
       * @type Boolean
       */
      readonly REACT_APP_SENTRY: string
      readonly REACT_APP_SENTRY_DSN: string

      // Business settings
      readonly REACT_APP_GA_ID?: string

      // API
      readonly REACT_APP_API_HOST: string
      /**
       * @type Boolean
       */
      readonly REACT_APP_API_CACHE: string
      /**
       * In milliseconds
       * 
       * @type Number
       */
      readonly REACT_APP_API_CACHE_TIME: string

      // Socket
      readonly REACT_APP_SOCKET_HOST?: string
    }
  }
}

export { }
