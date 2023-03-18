'use strict'
import Koa from 'koa'

const badRequest = (ctx: Koa.Context, message: any) => {
  ctx.status = 400
  const msg = message || 'Bad Request'
  switch (ctx.type) {
    case 'application/json':
      ctx.body = {
        message: msg
      }
      break
    default:
      ctx.type = 'text'
      ctx.body = msg
  }
}

const notFound = (ctx: Koa.Context) => {
  ctx.status = 404
  switch (ctx.type) {
    case 'application/json':
      ctx.body = {
        message: 'Not Found'
      }
      break
    default:
      ctx.type = 'text'
      ctx.body = 'Not Found'
  }
}

const unauthorized = (ctx: Koa.Context) => {
  ctx.status = 401
  switch (ctx.type) {
    case 'application/json':
      ctx.body = {
        message: 'Unauthorized'
      }
      break
    default:
      ctx.type = 'text'
      ctx.body = 'Unauthorized'
  }
}

const internalError = (ctx: Koa.Context, message: any) => {
  // we need to explicitly set 404 here
  // so that koa doesn't assign 200 on body=
  ctx.status = 500
  switch (ctx.type) {
    case 'application/json':
      ctx.body = {
        message: handleErrorMsg(message) || 'Internal Error'
      }
      break
    default:
      ctx.type = 'text'
      ctx.body = handleErrorMsg(message) || 'Internal Error'
  }
}

const error = async (ctx: Koa.Context, next: Function) => {
  try {
    await next()
    if (ctx.status === 404) {
      notFound(ctx)
    } else if (ctx.status === 401) {
      unauthorized(ctx)
    } else if (ctx.status === 400) {
      badRequest(ctx, ctx.body)
    }
  } catch (err: any) {
    console.log(err)
    internalError(ctx, err.message)
    // ctx.app.emit('error', err, ctx)
  }
}

const handleErrorMsg = (msg: string) => {
  let text = msg
  if (msg.indexOf('E11000 duplicate key error') === 0) {
    text = `dbDuplicateKey.${msg
      .split(':')[2]
      .trim()
      .split('_')[0]
      }`
  }

  return text
  // 'E11000 duplicate key error collection: dp-maturity-assessment.companies index: name_1 dup key: { : "Test4" }'.split(':')[2].trim().split('_')[0]
}

export default (app: Koa) => {
  // Catch and format the error in the upstream.
  // https://github.com/koajs/koa/wiki/Error-Handling
  app.use(error)
}
