import axios, { Axios } from 'axios'

const apiFactory = (axios: Axios) => ({
  test() {
    // return axios.get('/openai/ask')
    return axios.get('/test')
  },
  error() {
    // return axios.get('/openai/ask')
    return axios.get('/error')
  }
})

export default defineNuxtPlugin((app) => {
  // Doing something with nuxtApp
  const url = `${app.$config.app.baseURL}api`
  const instance = axios.create({
    baseURL: url
  })

  instance.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      if (error.response && error.response.status) {
        console.log(error.response)
        return Promise.reject(
          new Error(`${error.response.status} - ${error.response.config.url} - ${error.response.data.message}`)
        )
      } else {
        return Promise.reject(new Error('Network issue'))
      }
    }
  )
  const api = apiFactory(instance)
  return {
    provide: {
      api: api
    }
  }
})
