import {HTTPTransport} from '../../modules/HTTPTransport/index'
import {parseJSON} from '../../utils/parseJSON'
import {ISignUpData, ISignInData} from './models'
import {IUser} from '../user/models'
import {API_URL} from '../consts'

const AuthAPIInstance = new HTTPTransport<ISignInData>()
const AUTH_URL = `${API_URL}/auth`
export class AuthAPI {
    login(data: ISignInData): Promise<unknown> {
        return AuthAPIInstance.post(`${AUTH_URL}/signin`, {
            data,
            headers: {'Content-Type': 'application/json'},
        })
    }

    signup(data: ISignUpData): Promise<unknown> {
        return AuthAPIInstance.post(`${AUTH_URL}/signup`, {
            data,
            headers: {'Content-Type': 'application/json'},
        })
    }

    async getUser(): Promise<IUser> {
        return parseJSON(
            await AuthAPIInstance.get(`${AUTH_URL}/user`, {
                headers: {'Content-Type': 'application/json'},
            })
        )
    }

    async auth(): Promise<IUser> {
        return parseJSON(
            await AuthAPIInstance.get(`${AUTH_URL}/user`, {
                headers: {'Content-Type': 'application/json'},
            })
        )
    }

    logout(): Promise<unknown> {
        return AuthAPIInstance.post(`${AUTH_URL}/logout`, {
            headers: {'Content-Type': 'application/json'},
        })
    }
}
