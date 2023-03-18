'use strict'

import Koa from 'koa'
import mount from 'koa-mount'
import { config } from '../config/index.js'

const jsonMiddleware = async (ctx: Koa.Context, next: Function) => {
  ctx.type = 'json'
  await next()
}

export default (app: Koa) => {
  app.use(mount(`${config.basePath}api`, jsonMiddleware))
}
