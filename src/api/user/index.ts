import {HTTPTransport} from "../../modules/HTTPTransport/index";
import {parseJSON} from "../../utils/parseJSON";
import {IUser, IPasswordData, ILoginData} from "./models";
import {API_URL} from "../consts";

const userAPIInstance = new HTTPTransport<unknown>();
const USER_URL = `${API_URL}/user`;

export class UserAPI {
    async put(data: IUser): Promise<IUser> {
        return parseJSON(
            await userAPIInstance.put(`${USER_URL}/profile`, {
                data,
                headers: {"Content-Type": "application/json"},
            })
        );
    }

    async putAvatar(data: unknown): Promise<IUser> {
        return parseJSON(
            await userAPIInstance.put(`${USER_URL}/profile/avatar`, {
                data,
            })
        );
    }

    async putPassword(data: IPasswordData): Promise<unknown> {
        return await userAPIInstance.put(`${USER_URL}/password`, {
            data,
            headers: {"Content-Type": "application/json"},
        });
    }

    async findUser(data: ILoginData): Promise<unknown> {
        return parseJSON(
            await userAPIInstance.post(`${USER_URL}/search`, {
                data,
                headers: {"Content-Type": "application/json"},
            })
        );
    }

    async getUserByIdFromUrl(id: string): Promise<unknown> {
        return parseJSON(
            await userAPIInstance.get(`${USER_URL}/${id}`, {
                headers: {"Content-Type": "application/json"},
            })
        );
    }
}
