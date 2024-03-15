import { notification } from 'ant-design-vue'
import axios, { AxiosRequestConfig } from 'axios'

// axios.defaults.baseURL = process.env.SERVER_URL;
const axiosInstance = axios.create({})

// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
  const user: any = JSON.parse(localStorage.getItem('user') || '{}')
  config.headers.Authorization = user?.token ? `Bearer ${user.token}` : ''
  return config
})

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    const { status, config } = response

    if (status === 200 || status === 201) {
      if (config?.notNormalRes) return response.data
      else {
        return response.data.data
      }
    } else {
      notification.error({
        description: '发生错误',
        message: '错误'
      })
      return response
    }
  },
  (error) => {
    const { config } = error
    const {
      response: { data }
    } = error
    if (!config.customNotify) {
      notification.error({
        description: '发生错误',
        message: '错误'
      })
    } else {
      notification.error({
        description: '发生错误',
        message: '错误'
      })
    }

    return Promise.reject(error)
  }
)

type RequestParamsType<T> = {
  params?: T
  otherAxiosConfig?: AxiosRequestConfig & Record<string, any>
}
type RequestMethodType = 'post' | 'get'
function createRequest(requestMethod: RequestMethodType) {
  return function <T, R>(
    url: string,
    config?: RequestParamsType<T>
  ): Promise<R> {
    const { params, otherAxiosConfig } = config || {}
    return axiosInstance.request({
      url,
      params,
      method: requestMethod,
      ...otherAxiosConfig
    })
  }
}

const getRequest = createRequest('get')
const postRequest = createRequest('post')

export { getRequest, postRequest }
