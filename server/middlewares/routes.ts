'use strict'

import routers from '../routes/index.js'
import _ from 'lodash'
import Koa from 'koa'

export default (app: Koa) => {
  _.each(routers, (router) => {
    router(app)
  })
}
