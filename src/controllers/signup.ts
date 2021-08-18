import {ISignInData} from 'api/auth/models'
import AuthAPI from 'api/auth'
import {router, ROUTES} from 'modules/router'

const authAPI = new AuthAPI()

const signupController = async (data: ISignInData) => {
    try {
        await authAPI.signUp(data)
        router.go(ROUTES.MESSENGER)
    } catch (error) {
        throw error
    }
}

export default signupController
