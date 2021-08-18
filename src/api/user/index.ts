import HTTPTransport from 'modules/HTTPTransport'
import {parseJSON} from 'utils/parseJSON'
import {IUser, IAvatartData, IPasswordData} from './models'
import {API_URL} from '../consts'

const userAPIInstance = new HTTPTransport<unknown>()
const USER_URL = `${API_URL}/user`
export class UserAPI {
    public editProfile = async (data: IUser): Promise<IUser> => {
        const response = await userAPIInstance.put(`${USER_URL}/profile`, {data})
        return parseJSON(response)
    }

    public editAvatar = async (data: IAvatartData): Promise<IUser> => {
        const response = await userAPIInstance.put(`${USER_URL}/profile/avatar`, {
            data,
            isFormData: true
        })
        return parseJSON(response)
    }

    public editPassword = (data: IPasswordData): Promise<unknown> => {
        return userAPIInstance.put(`${USER_URL}/password`, {data})
    }
}

export default UserAPI
