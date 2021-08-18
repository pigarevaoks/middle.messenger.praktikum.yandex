import UserAPI from 'api/user'
import {IUser, IAvatartData, IPasswordData} from 'api/user/models'
import {router, ROUTES} from 'modules/router'
import {userStore} from 'stores/user'
import {STORE_EVENTS} from 'modules/store/enums'

const userAPI = new UserAPI()

export const editProfileController = async (data: IUser, callback: (storeData?: any) => void) => {
    userStore.on(STORE_EVENTS.UPDATE, callback)
    try {
        const response = await userAPI.editProfile(data)
        userStore.update(response)
        router.go(ROUTES.SETTINGS)
    } catch (error) {
        console.error(error)
        router.go(ROUTES.HOME)
    }
}

export const editAvatarController = async (data: IAvatartData) => {
    try {
        await userAPI.editAvatar(data)
        // userStore.update(userData);
    } catch (error) {
        throw error
    }
}

export const editPasswordController = async (data: IPasswordData) => {
    try {
        await userAPI.editPassword(data)
        router.go(ROUTES.SETTINGS)
    } catch (error) {
        throw error
    }
}
