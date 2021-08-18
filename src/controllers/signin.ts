import {ISignInData} from 'api/auth/models'
import AuthAPI from 'api/auth'
import {router, ROUTES} from 'modules/router'

const authAPI = new AuthAPI()

const signinController = async (data: ISignInData) => {
    try {
        await authAPI.signIn(data)
        router.go(ROUTES.MESSENGER)
    } catch (error) {
        console.log(error)
    }
}

export default signinController
