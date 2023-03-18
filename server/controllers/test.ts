'use strict'

import Koa from 'koa'
import TestService from '../services/test.js'
/*
 * API Controller
 */

const test = async (ctx: Koa.Context) => {
  // const text = ctx.request.body.text
  ctx.body = TestService.test()
}

export default {
  test
}
