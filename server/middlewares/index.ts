import session from './session.js'
import parser from './parser.js'
import serveStatic from './static.js'
import logger from './logger.js'
import apiJson from './api-json.js'
import error from './error.js'
import routes from './routes.js'

export default (app: any) => {
  session(app)
  parser(app)
  serveStatic(app)
  logger(app)
  apiJson(app)
  error(app)
  routes(app)
}
