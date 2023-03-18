'use strict'

import serve from 'koa-static'
import mount from 'koa-mount'
import compress from 'koa-compress'
import { config } from '../config/index.js'

export default (app: any) => {
  app.use(compress({
    filter: (contentType) => {
      // console.log(contentType)
      return /json|text|javascript|css/i.test(contentType)
    }
  }))

  app.use(mount(`${config.basePath}static`, serve('./static')))
}
