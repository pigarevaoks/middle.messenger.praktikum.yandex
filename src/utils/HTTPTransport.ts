import { EMethod } from '../common/enums'
import queryStringify from './queryStringify'

interface OptionsType {
    method?: string
    timeout?: number
    headers?: any
    data?: any
}

export default class HTTPTransport {
  public get(url: string, options: OptionsType = {}): void {
    this.request(
      `${url}${queryStringify(options.data)}`,
      { ...options, method: EMethod.GET },
      options.timeout,
    )
  }

  public post(url: string, options: OptionsType = {}): void {
    this.request(url, { ...options, method: EMethod.POST }, options.timeout)
  }

  public put(url: string, options: OptionsType = {}): void {
    this.request(url, { ...options, method: EMethod.PUT }, options.timeout)
  }

  public delete(url: string, options: OptionsType = {}) {
    this.request(url, { ...options, method: EMethod.DELETE }, options.timeout)
  }

    private request = (url: string, options: OptionsType = {}, timeout = 5000) => {
      const { headers = {}, method, data } = options

      return new Promise((resolve, reject) => {
        if (!method) {
          reject('No method')
          return
        }

        const xhr = new XMLHttpRequest()
        const isGet = method === EMethod.GET

        xhr.open(method, url)

        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key])
        })

        xhr.onload = () => {
          resolve(xhr)
        }

        xhr.onabort = reject
        xhr.onerror = reject

        xhr.timeout = timeout
        xhr.ontimeout = reject

        if (isGet || !data) {
          xhr.send()
        } else {
          xhr.send(data)
        }
      })
    }
}
