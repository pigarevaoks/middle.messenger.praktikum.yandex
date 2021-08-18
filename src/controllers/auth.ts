import {router, ROUTES} from 'modules/router'
// import {parseJSON} from 'utils/parseJSON'
import AuthAPI from 'api/auth'
import {userStore} from 'stores/user'
import {STORE_EVENTS} from 'modules/store/enums'

const authAPI = new AuthAPI()

export const authController = async (callback: (storeData?: any) => void) => {
    userStore.on(STORE_EVENTS.UPDATE, callback)
    try {
        const response = await authAPI.getUser()
        // const response = parseJSON(await authAPI.getUser())
        userStore.update(response)
    } catch (error) {
        console.error(error)
        router.go(ROUTES.HOME)
    }
}

export const redirectToChatController = async () => {
    try {
        await authAPI.getUser()
        router.go(ROUTES.MESSENGER)
    } catch (error) {
        console.error(error)
        router.go(ROUTES.HOME)
    }
}
