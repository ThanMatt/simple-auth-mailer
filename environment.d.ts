declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SENDGRID_API_TOKEN: string
      NODE_ENV: 'development' | 'production'
    }
  }
}

export {}
