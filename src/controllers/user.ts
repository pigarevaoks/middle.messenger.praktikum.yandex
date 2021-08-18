import AuthAPI from 'api/auth'
import {STORE_EVENTS} from 'modules/store/enums'
import {userStore} from 'stores/user'

// export const userController = async (callback: (storeData?: any) => void) => {
//     userStore.on(STORE_EVENTS.UPDATE, callback)
//     try {
//         const userData = await getUser()
//         userStore.update(userData)
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const userController = async () => {
//     // userStore.on(STORE_EVENTS.UPDATE, () => {})
//     try {
//         return await getUser()
//         // userStore.update(userData)
//         // return userData
//     } catch (error) {
//         console.log(error)
//     }
// }

const authAPI = new AuthAPI()

export const userController = async (callback: (storeData: any) => void) => {
    userStore.on(STORE_EVENTS.UPDATE, callback)
    try {
        const response = await authAPI.getUser()
        userStore.update(response)
    } catch (error) {
        console.error(error)
        // router.go(ROUTES.LOGIN);
    }
}
