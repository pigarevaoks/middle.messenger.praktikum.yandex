import HTTPTransport from 'modules/HTTPTransport'
import {parseJSON} from 'utils/parseJSON'
import {ISignUpData, ISignInData} from './models'
import {API_URL} from '../consts'

const AuthAPIInstance = new HTTPTransport<ISignInData>()
const AUTH_URL = `${API_URL}/auth`
class AuthAPI {
    public signIn(data: ISignInData): Promise<unknown> {
        return AuthAPIInstance.post(`${AUTH_URL}/signin`, {data})
    }

    public signUp(data: ISignUpData): Promise<unknown> {
        return AuthAPIInstance.post(`${AUTH_URL}/signup`, {data})
    }

    public async getUser(): Promise<unknown> {
        const response = await AuthAPIInstance.get(`${AUTH_URL}/user`)
        return parseJSON(response)
    }

    public logout(): Promise<unknown> {
        return AuthAPIInstance.post(`${AUTH_URL}/logout`)
    }
}

export default AuthAPI
