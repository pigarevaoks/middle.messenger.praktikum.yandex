import {parseJSON} from '../../utils/parseJSON'
import queryStringify from './queryStringify'
import {METHOD, CREDENTIALS, MODE} from './enums'

interface Options<TRequest> {
    method: METHOD
    isFormData?: boolean
    headers?: {[key: string]: string}
    timeout?: number
    credentials?: CREDENTIALS
    mode?: MODE
    data?: TRequest | FormData
}

interface OptionsType {
    method?: METHOD
}

interface TPromiseResponse {
    response: unknown
    status: number
}

export default class HTTPTransport<TRequest> {
    get = async (url: string, options: OptionsType = {}): Promise<unknown> => {
        const {response, status} = await this.request(url, {...options, method: METHOD.GET})
        if (status !== 200) {
            throw new Error(parseJSON(response).reason)
        }
        return response
    }

    put = async (url: string, options: OptionsType = {}): Promise<unknown> => {
        const {response, status} = await this.request(url, {...options, method: METHOD.PUT})
        if (status !== 200) {
            throw new Error(parseJSON(response).reason)
        }
        return response
    }

    post = async (url: string, options: OptionsType = {}): Promise<unknown> => {
        const {response, status} = await this.request(url, {...options, method: METHOD.POST})
        if (status !== 200) {
            throw new Error(parseJSON(response).reason)
        }
        return response
    }

    delete = async (url: string, options: OptionsType = {}): Promise<unknown> => {
        const {response, status} = await this.request(url, {...options, method: METHOD.DELETE})
        if (status !== 200) {
            throw new Error(parseJSON(response).reason)
        }
        return response
    }

    request(
        url: string,
        options: Options<TRequest> = {method: METHOD.GET}
    ): Promise<TPromiseResponse> {
        const {
            method,
            isFormData,
            data,
            credentials = CREDENTIALS.include,
            headers = {'Content-Type': 'application/json'},
            timeout = 5000
        } = options

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method')
                return
            }

            const xhr = new XMLHttpRequest()
            xhr.open(
                method,
                method === METHOD.GET && !!data ? `${url}${queryStringify(data)}` : url
            )

            xhr.withCredentials = credentials === CREDENTIALS.include

            Object.keys(headers).forEach((key) => xhr.setRequestHeader(key, headers[key]))

            xhr.onload = function () {
                resolve({
                    response: xhr.response,
                    status: xhr.status
                })
            }

            if (isFormData) {
                xhr.setRequestHeader('Content-Type', 'multipart/form-data')
            }

            xhr.onabort = reject
            xhr.onerror = reject
            xhr.timeout = timeout
            xhr.ontimeout = reject

            if (method === METHOD.GET || !data) {
                xhr.send()
            } else {
                if (!isFormData) {
                    xhr.send(JSON.stringify(data))
                } else {
                    xhr.send(<FormData>data)
                }
            }
        })
    }
}
