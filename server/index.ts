'use strict'

import Koa from 'koa'
import chalk from 'chalk'
import moment from 'moment'
import { config } from './config/index.js'
import middlewares from './middlewares/index.js'

const init = async () => {
  const app = new Koa()
  const host = '0.0.0.0'
  const port = config.port
  // // Middlewares are imported here.
  // middlewares(app, connection)
  middlewares(app)

  app.listen(port, host, () => {
    // Logging initialization
    console.log('--')
    console.log(
      chalk.green(
        `[${moment().format('YYYY-MM-DD HH:mm:ss')}] Server started on port http://localhost:8087${config.basePath}api`
      )
    )
    console.log('--')
  })
}

init()
