import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer({
  // change to your backend api url
  target: `http://127.0.0.1:${process.env.KOA_PORT}${process.env.BASE_PATH}`,
  changeOrigin: true
})

export default defineEventHandler((event) => {
  return new Promise((resolve, reject) => {
    const options = {}

    // const origEnd = event.node.res.end
    // event.node.res.end = () => {
    //   console.log('end')
    //   resolve(null)
    //   return origEnd.call(event.node.res, null, 'utf8')
    // }

    // proxy.web() works asynchronously
    proxy.web(event.node.req, event.node.res, options, (error) => {
      // console.log(error.message)
      reject(error.message)
    })
  })
})
