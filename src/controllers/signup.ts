import {ISignUpData} from "../api/auth/models";
import {AuthAPI} from "../api/auth/index";
import {router, ROUTES} from "../modules/router/index";
import {dispalyFormError} from "../modules/validation/index";

const authAPI = new AuthAPI();
export class SignupController {
    async signup(data: ISignUpData) {
        try {
            await authAPI.signup(data);
            router.go(ROUTES.HOME);
        } catch (error) {
            console.log("signup", error);
            dispalyFormError(error);
        }
    }
}
