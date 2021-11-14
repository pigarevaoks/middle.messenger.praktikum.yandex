import {AuthAPI} from '../api/auth/index'
import {UserAPI} from '../api/user/index'
import {ILoginData} from '../api/user/models'
import {STORE_EVENTS} from '../modules/store/constants'
import {userStore} from '../stores/user'
import {router} from '../modules/router/index'

const authAPI = new AuthAPI()
const userAPI = new UserAPI()

export class UserController {
    async getUserData(callback: (storeData: unknown) => void) {
        userStore.on(STORE_EVENTS.UPDATE, callback)
        try {
            const userData = await authAPI.getUser()
            userStore.update(userData)
        } catch (error) {
            console.log('getUserData', error)
        }
    }

    async findUser(data: ILoginData) {
        try {
            const userData = await userAPI.findUser(data)
            return userData
        } catch (error) {
            console.log('findUser', error)
        }
    }

    async getUserByIdFromUrl() {
        try {
            const id = router.getUrlParam()
            const userData = await userAPI.getUserByIdFromUrl(id)
            return userData
        } catch (error) {
            console.log('getUserById', error)
        }
    }
}
