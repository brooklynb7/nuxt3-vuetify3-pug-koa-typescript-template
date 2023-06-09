'use strict'

import session from 'koa-session'
import { config } from '../config/index.js'

export default (app: any) => {
  app.keys = [config.session.secretKey]
  app.use(
    session(
      {
        // session expiration is set by default to 24 hours
        maxAge: 24 * (60 * 60 * 1000),
        // httpOnly flag makes sure the cookie is only accessed
        // through the HTTP protocol and not JS/browser
        httpOnly: true,
        // secure cookie should be turned to true to provide additional
        // layer of security so that the cookie is set only when working
        // in HTTPS mode.
        secure: false,
        key: config.basePath
      },
      app
    )
  )
}
