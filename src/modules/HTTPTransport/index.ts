import {parseJSON} from '../../utils/parseJSON'
import queryStringify from './queryStringify'
import {METHOD, CREDENTIALS, MODE} from './constants'

type Options<TRequest> = {
    method: METHOD
    headers?: {[key: string]: string}
    timeout?: number
    credentials?: CREDENTIALS
    mode?: MODE
    data?: TRequest
}

type OptionsWithoutMethod<TRequest> = Omit<Options<TRequest>, 'method'>

type TPromiseResponse = {
    response: unknown
    status: number
}

export class HTTPTransport<TRequest> {
    get = async (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<unknown> => {
        const {response, status} = await this.request(url, {
            ...options,
            method: METHOD.GET,
        })
        if (status !== 200) {
            throw new Error(parseJSON(response).reason)
        }
        return response
    }

    put = async (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<unknown> => {
        const {response, status} = await this.request(url, {
            ...options,
            method: METHOD.PUT,
        })
        if (status !== 200) {
            throw new Error(parseJSON(response).reason)
        }
        return response
    }

    post = async (url: string, options: OptionsWithoutMethod<TRequest> = {}): Promise<unknown> => {
        const {response, status} = await this.request(url, {
            ...options,
            method: METHOD.POST,
        })
        if (status !== 200) {
            throw new Error(parseJSON(response).reason)
        }
        return response
    }

    delete = async (
        url: string,
        options: OptionsWithoutMethod<TRequest> = {}
    ): Promise<unknown> => {
        const {response, status} = await this.request(url, {
            ...options,
            method: METHOD.DELETE,
        })
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
            data,
            credentials = CREDENTIALS.include,
            // headers = {'Content-Type': 'application/json'},
            headers = {},
            timeout = 5000,
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

            // if (method === METHOD.GET || !data) {
            //     xhr.setRequestHeader('Content-Type', 'application/json')
            // } else if (data instanceof FormData) {
            //     xhr.setRequestHeader('Content-Type', 'multipart/form-data')
            // } else {
            //     xhr.setRequestHeader('Content-Type', 'application/json')
            // }

            Object.keys(headers).forEach((key) => xhr.setRequestHeader(key, headers[key]))

            xhr.onload = function () {
                resolve({
                    response: xhr.response,
                    status: xhr.status,
                })
            }

            xhr.onabort = reject
            xhr.onerror = reject
            xhr.timeout = timeout
            xhr.ontimeout = reject

            // if (method === METHOD.GET || !data) {
            //     xhr.send()
            // } else {
            //     xhr.send(JSON.stringify(data))
            // }

            if (method === METHOD.GET || !data) {
                // xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.send()
            } else if (data instanceof FormData) {
                // xhr.setRequestHeader('accept', 'application/json')
                // xhr.setRequestHeader('Content-Type', 'multipart/form-data')
                xhr.send(data)
            } else {
                // xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.send(JSON.stringify(data))
            }
        })
    }
}
