import Koa from 'koa'
import Router from 'koa-router'
import TestController from '../controllers/test.js'
import { config } from '../config/index.js'

const testRouter = new Router({
  prefix: `${config.basePath}api/test`
})

export default (app: Koa) => {
  testRouter.get('/', TestController.test)
  app.use(testRouter.routes())
}
