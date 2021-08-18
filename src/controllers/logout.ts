import AuthAPI from 'api/auth'
import {router, ROUTES} from 'modules/router'

const authAPI = new AuthAPI()

const logoutController = async () => {
    try {
        await authAPI.logout()
        router.go(ROUTES.HOME)
    } catch (error) {
        console.log(error)
    }
}

export default logoutController
