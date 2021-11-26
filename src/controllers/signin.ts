import {ISignInData} from "../api/auth/models";
import {AuthAPI} from "../api/auth/index";
import {router, ROUTES} from "../modules/router/index";
import {dispalyFormError} from "../modules/validation/index";

const authAPI = new AuthAPI();

export class SigninController {
    async signin(data: ISignInData) {
        try {
            await authAPI.login(data);
            router.go(ROUTES.HOME);
        } catch (error) {
            console.log("signin", error);
            dispalyFormError(error);
        }
    }
}
